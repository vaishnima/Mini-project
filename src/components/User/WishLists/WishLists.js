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
