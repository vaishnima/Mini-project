// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function WishList() {
//   // State to store wishlist items
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // Function to remove item from wishlist
//   const removeFromWishlist = (productId) => {
//     setWishlistItems(wishlistItems.filter(item => item._id !== productId));
//   };

//   return (
//     <div>
//       <h2>Wishlist</h2>
//       {wishlistItems.length === 0 ? (
//         <p>Your wishlist is empty.</p>
//       ) : (
//         <ul>
//           {wishlistItems.map(item => (
//             <li key={item._id}>
//               <Link to={`/shop/${item._id}`}>{item.name}</Link>
//               <button onClick={() => removeFromWishlist(item._id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default WishList;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function WishList() {
//   // State to store wishlist items
//   const [wishlistItems, setWishlistItems] = useState([
//     // Example items with image property
//     { _id: '1', name: 'Product 1', image: 'https://example.com/product1.jpg' },
//     { _id: '2', name: 'Product 2', image: 'https://example.com/product2.jpg' },
//   ]);

//   // Function to remove item from wishlist
//   const removeFromWishlist = (productId) => {
//     setWishlistItems(wishlistItems.filter(item => item._id !== productId));
//   };

//   return (
//     <div>
//       <h2>Wishlist</h2>
//       {wishlistItems.length === 0 ? (
//         <p>Your wishlist is empty.</p>
//       ) : (
//         <ul>
//           {wishlistItems.map(item => (
//             <li key={item._id}>
//               <Link to={`/shop/${item._id}`}>
//                 <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
//                 {item.name}
//               </Link>
//               <button onClick={() => removeFromWishlist(item._id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default WishList;

// import React, { useEffect, useState } from "react";
// import {
//   addToCart,
//   getWishlist,
//   removeFromWishlist,
// } from "../../../Services/UserApi";
// import "./Wishlist.css";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import Empty from "../../User/Empty/Empty";
// import Loader from "../Loader/Loader";

// function Wishlist() {
//   const [wishlistData, setWishlistData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const fetchWishlist = async () => {
//     try {
//       const response = await getWishlist();
//       setWishlistData(response.data);
//     } catch (error) {
//       setError("Failed to fetch wishlist");
//     } finally {
//       setTimeout(() => {
//         setLoading(false);
//       }, 1000);
//     }
//   };
//   useEffect(() => {
//     fetchWishlist();
//   }, []);

//   const handleAddToCart = async (productId) => {
//     try {
//       await addToCart(productId);
//       toast.success("Product added to cart");
//     } catch (error) {
//       console.error("Failed to add product to cart", error);
//       toast.error("Failed to add product to cart");
//     }
//   };

//   const handleRemoveFromWishlist = async (productId) => {
//     try {
//       await removeFromWishlist(productId);
//       setWishlistData(wishlistData.filter((item) => item._id !== productId));
//       toast.success("Product removed from wishlist");
//     } catch (error) {
//       console.error("Failed to remove product from wishlist", error);
//       toast.error("Failed to remove product from wishlist");
//     }
//   };

//   if (loading)
//     return (
//       <div style={{ margin: "300px" }}>
//         <Loader />
//       </div>
//     );

//   if (error) return <div>{error}</div>;
//   return (
//     <div className="wishlist">
//       <div className="wishlistHeading">
//         <h1>My Wishlist</h1>
//       </div>
//       {wishlistData.length === 0 ? (
//         <Empty message="No Product in Wishlist" />
//       ) : (
//         <table className="wishTable">
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {wishlistData.map((item) => (
//               <tr key={item._id}>
//                 <td>
//                   <img
//                     src={`http://localhost:8000/public/images/products/${item.image}`}
//                     alt={item.name}
//                     style={{
//                       width: "300px",
//                       height: "300px",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => {
//                       navigate(`/product/${item._id}`);
//                     }}
//                   />
//                 </td>
//                 <td>{item.name}</td>
//                 <td>{item.price.toFixed(2)}</td>
//                 <td>
//                   <button
//                     onClick={() => handleAddToCart(item._id)}
//                     className="wishlistAddToCartBtn"
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={() => handleRemoveFromWishlist(item._id)}
//                     className="wishlistRemoveFromWishlistBtn"
//                   >
//                     Remove From Wishlist
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default Wishlist;

import React, { useEffect, useState } from "react";
import {
  addToCart,
  getWishlist,
  removeFromWishlist,
} from "../../../Services/UserApi";
import "./WishList.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();
      if (Array.isArray(response.data)) {
        setWishlistData(response.data);
      } else {
        setError("Failed to fetch wishlist");
      }
    } catch (error) {
      setError("Failed to fetch wishlist");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId);
      toast.success("Product added to cart");
    } catch (error) {
      console.error("Failed to add product to cart", error);
      toast.error("Failed to add product to cart");
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await removeFromWishlist(productId);
      setWishlistData(wishlistData.filter((item) => item._id !== productId));
      toast.success("Product removed from wishlist");
    } catch (error) {
      console.error("Failed to remove product from wishlist", error);
      toast.error("Failed to remove product from wishlist");
    }
  };
  if(loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>;

  return (
    <div className="wishlist">
      <div className="wishlistHeading">
        <h1>My Wishlist</h1>
      </div>
      {wishlistData.length === 0 ? (
        <div className="emptyWishlist">
          <p>No Product in Wishlist</p>
        </div>
      ) : (
        <table className="wishTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlistData.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "300px",
                      height: "300px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/product/${item._id}`);
                    }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="wishlistAddToCartBtn"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(item._id)}
                    className="wishlistRemoveFromWishlistBtn"
                  >
                    Remove 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Wishlist;