// import React, { useState } from 'react';
// import { addCart, removeCart } from '../../../Services/UserApi';         

// const AddCart = () => {
//   const [userEmail, setUserEmail] = useState('');
//   const [productId, setProductId] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleAddCart = async () => {
//     try {
//       const response = await addCart(userEmail, productId, quantity);
//       setMessage(response.message);
//       setError('');
//     } catch (error) {
//       setMessage('');
//       setError(error.response ? error.response.data.message : error.message);
//     }
//   };

//   const handleRemoveCart = async () => {
//     try {
//       const response = await removeCart(userEmail, productId);
//       setMessage(response.message);
//       setError('');
//     } catch (error) {
//       setMessage('');
//       setError(error.response ? error.response.data.message : error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Manage Cart</h2>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={userEmail}
//           onChange={(e) => setUserEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Product ID:</label>
//         <input
//           type="text"
//           value={productId}
//           onChange={(e) => setProductId(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Quantity:</label>
//         <input
//           type="number"
//           value={quantity}
//           min="1"
//           onChange={(e) => setQuantity(parseInt(e.target.value))}
//         />
//       </div>
//       <button onClick={handleAddCart}>Add to Cart</button>
//       <button onClick={handleRemoveCart}>Remove from Cart</button>
//       {message && <p style={{ color: 'green' }}>{message}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default AddCart;


// import React, { useEffect, useState } from "react";
// import "./Cart.css";
// import { getCart,removeFromCart,editCart } from "../../../Services/UserApi";
// import { useNavigate } from "react-router-dom";
// // import Empty from "../Empty/Empty";



// function Cart() {
//   const [cartData, setCartData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const fetchCart = async () => {
//     try {
//       const response = await getCart();
//       setCartData(response.data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setTimeout(() => {
//         setLoading(false);
//       }, 1000);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);


//   if (error) {
//     return <div>Error: {error}</div>;
//   }



//   return (
//     <div className="cart">
//       <div className="cartHeading">
//         <h1>Shopping Cart</h1>
//       </div>
//       {cartData.length === 0 ? (
//       <div className="emptyCart"> 
//       <p>No product in wishlist</p>
//       </div>
//       ) : (
//         <table className="cartTable">
//           <thead>
//             <tr>
//               <th>Product Image</th>
//               <th>Product Name</th>
//               <th>Quantity</th>
//               <th>Price</th>
//               <th>Total Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartData.map((item) => (
//               <tr key={item.product._id}>
//                 <td>
//                   <img
//                     src={item.product.image}
//                     alt={item.product.name}
//                     style={{
//                       width: "120px",
//                       height: "120px",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => {
//                       navigate(`/product/${item.product._id}`);
//                     }}
//                   />
//                 </td>
//                 <td>{item.product.name}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.product.price}</td>
//                 <td>{(item.quantity * item.product.price)}</td>
//                 <td>
//                   <button
//                   className="cartBuyNowBtn">
//                     Buy Now
//                   </button>
//                   <button
//                   className="cartRemoveBtn">
//                     Remove 
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

// export default Cart;


import React, { useEffect, useState } from "react";
import "./Cart.css";
import { getCart, removeFromCart, editCart } from "../../../Services/UserApi";
import { useNavigate } from "react-router-dom";
import Empty from "../Empty/Empty";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const response = await getCart();
      if (Array.isArray(response.data)) {
        setCartData(response.data);
      } else {
        setCartData([]);
        setError("Unexpected data format");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      setCartData(cartData.filter(item => item.product._id !== productId));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditQuantity = async (productId, quantity) => {
    if (quantity <= 0) {
      alert("Quantity must be at least 1");
      return;
    }
    try {
      await editCart(productId, quantity);
      setCartData(cartData.map(item => item.product._id === productId ? { ...item, quantity } : item));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cart">
      <div className="cartHeading">
        <h1>Shopping Cart</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {cartData.length === 0 ? (
            <Empty message="No Products in Cart" />
          ) : (
            <table className="cartTable">
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item) => (
                  <tr key={item.product._id}>
                    <td>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        style={{
                          width: "120px",
                          height: "120px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate(`/product/${item.product._id}`);
                        }}
                      />
                    </td>
                    <td>{item.product.name}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleEditQuantity(item.product._id, parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td>{item.product.price}</td>
                    <td>{item.quantity * item.product.price}</td>
                    <td>
                      <button className="cartBuyNowBtn">Buy Now</button>
                      <button
                        className="cartRemoveBtn"
                        onClick={() => handleRemove(item.product._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;