import React, { useState, useEffect } from 'react';
import { getWishlist,removeWishlistItem } from '../../../Services/UserApi'; // Assume there's an API function to get wishlist items
import ProductCard from './ProductCard';

function WishList() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const data = await getWishlist();
        console.log('Fetched wishlist data:', data);

        if (Array.isArray(data)) {
          setWishlistItems(data);
        } else {
          console.error('Data format error: Expected an array, but got:', data);
          throw new Error('Data format error: Expected an array');
        }
      } catch (error) {
        setError('Failed to fetch wishlist items. Please try again later.');
        console.error('Error fetching wishlist items:', error);
      }
    };
    
    fetchWishlistItems();
  }, []);

  const removeFromWishlist = async (productId) => {
    try {
      // Assuming there's an API function to remove item from wishlist
      await removeWishlistItem(productId);
      setWishlistItems(wishlistItems.filter(item => item._id !== productId));
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
    }
  };

  return (
    <div className="wishlist">
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="product-list">
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            wishlistItems.map((product) => (
              <ProductCard key={product._id} product={product}>
                <button onClick={() => removeFromWishlist(product._id)}>Remove</button>
              </ProductCard>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default WishList;


// import React, { useState, useEffect } from 'react';
// import { addToWishlist, getWishlist, removeWishlistItem } from '../../../Services/UserApi'; // API functions for wishlist management
// import ProductCard from './ProductCard';

// function WishList() {
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWishlistItems = async () => {
//       try {
//         const data = await getWishlist();
//         console.log('Fetched wishlist data:', data);

//         if (Array.isArray(data)) {
//           setWishlistItems(data);
//         } else {
//           console.error('Data format error: Expected an array, but got:', data);
//           throw new Error('Data format error: Expected an array');
//         }
//       } catch (error) {
//         setError('Failed to fetch wishlist items. Please try again later.');
//         console.error('Error fetching wishlist items:', error);
//       }
//     };

//     fetchWishlistItems();
//   }, []);

//   const addToWishlistHandler = async (productId) => {
//     try {
//       await addToWishlist(productId);
//       const updatedWishlist = await getWishlist();
//       setWishlistItems(updatedWishlist);
//     } catch (error) {
//       setError('Failed to add item to wishlist. Please try again later.');
//       console.error('Error adding item to wishlist:', error);
//     }
//   };

//   const removeFromWishlistHandler = async (productId) => {
//     try {
//       await removeWishlistItem(productId);
//       setWishlistItems(wishlistItems.filter(item => item._id !== productId));
//     } catch (error) {
//       setError('Failed to remove item from wishlist. Please try again later.');
//       console.error('Error removing item from wishlist:', error);
//     }
//   };

//   return (
//     <div className="wishlist">
//       {error ? (
//         <div className="error-message">{error}</div>
//       ) : (
//         <div className="product-list">
//           {wishlistItems.length === 0 ? (
//             <p>Your wishlist is empty.</p>
//           ) : (
//             wishlistItems.map((product) => (
//               <ProductCard key={product._id} product={product}>
//                 <button onClick={() => removeFromWishlistHandler(product._id)}>Remove</button>
//                 <button onClick={() => addToWishlistHandler(product._id)}>Add to Wishlist</button>
//               </ProductCard>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default WishList;

