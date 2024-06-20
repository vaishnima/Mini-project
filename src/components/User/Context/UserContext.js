// import React, { createContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { getCartItems, addCartItem, removeCartItem } from '../Services/CartApi';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await getCartItems();
//         setCart(response.data.cartItems);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const addToCart = async (email, productId, quantity) => {
//     try {
//       const response = await addCartItem(email, productId, quantity);
//       setCart([...cart, response.data.cartItem]);
//       toast.success('Product added to cart successfully');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       throw error;
//     }
//   };

//   const removeFromCart = async (email, productId) => {
//     try {
//       await removeCartItem(email, productId);
//       setCart(cart.filter(item => item.productId !== productId));
//       toast.success('Product removed from cart successfully');
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//       throw error;
//     }
//   };

//   return (
//     <UserContext.Provider value={{ cart, addToCart, removeFromCart, loading, error }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
