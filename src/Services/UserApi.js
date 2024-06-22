// import { userInstance } from "../axios/axiosInstance";

// export const signup = (value) =>{
//     return userInstance.post('/signup',{...value});
// };
// export const login = (value) =>{
//     return userInstance.post('/login',{...value});
// };

// export const shopProduct = async () => {
//   try {
//     const response = await userInstance.get('http://localhost:8000/shop'); 
//     return response.data.shopProduct; 
//   } catch (error) {
//     console.error('Error fetching shop products:', error.response || error.message || error);
//     throw error;
//   }
// };
//GET METHODS


// export const mens = () => {
//     return userInstance.get("/mens");
//   };
  
  
//   export const Womens = () => {
//     return userInstance.get("/womens");
//   };

 
//   export const kids = () => {
//     return userInstance.get("/kids");
//   };
import { userInstance } from "../axios/axiosInstance";

//POST METHOD

export const signup = (value) =>{
    return userInstance.post('/signup',{...value});
};

export const login = (value) =>{
    return userInstance.post('/login',{...value});
};

// export const postReview = (reviewData) => {
//   return userInstance.post("/reviews/create", { ...reviewData });
// };

// export const AddToWishlist = (productId) => {
//   return userInstance.post("/wishlist", { productId });
// };

// // Add to Cart
// export const addToCart = (userEmail, productId, quantity) => {
//   return userInstance.post('/addcart', { userEmail, productId, quantity });
// };

// // Remove from Cart
// export const removeCart = (userEmail, productId) => {
//   return userInstance.delete('/removecart', { userEmail, productId });
// };




//GET METHOD

export const shopProduct = async () => {
  try {
    const response = await userInstance.get('http://localhost:8000/shop'); 
    return response.data.shopProduct; 
  } catch (error) {
    console.error('Error fetching shop products:', error.response || error.message || error);
    throw error;
  }
};


export const mens = async () => {
  try {
    const response = await userInstance.get('http://localhost:8000/mens'); 
    return response.data.shopProduct; 
  } catch (error) {
    console.error('Error fetching shop products:', error.response || error.message || error);
    throw error;
  }
};


export const womens = async () => {
  try {
    const response = await userInstance.get('http://localhost:8000/womens'); 
    console.log('Full API response data:', response.data);
    return response.data.shopProduct; 
  } catch (error) {
    console.error('Error fetching shop products:', error.response || error.message || error);
    throw error;
  }
};



export const kids = async () => {
try {
  const response = await userInstance.get('http://localhost:8000/kids'); 
  console.log('Full API response data:', response.data);
  return response.data.shopProduct; 
} catch (error) {
  console.error('Error fetching shop products:', error.response || error.message || error);
  throw error;
}
};


// export const getWishlist = async () => {
//   try {
//     const response = await userInstance.get('http://localhost:8000/wishlist'); 
//     return response.data.wishlistItems; 
//   } catch (error) {
//     console.error('Error fetching wishlist items:', error.response || error.message || error);
//     throw error;
//   }
// };

// export const removeWishlistItem = async (productId) => {
//   try {
//     const response = await userInstance.delete(`http://localhost:8000/wishlist/${productId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error removing item from wishlist:', error.response || error.message || error);
//     throw error;
//   }
// };

// export const addToWishlist = async (productId) => {
//   try {
//     const response = await userInstance.post('/wishlist', { productId });
//     return response.data;
//   } catch (error) {
//     console.error('Error adding item to wishlist:', error.response || error.message || error);
//     throw error;
//   }
// };


// export const Createuserreview = async (productId, productData) => {
//   try {
//     console.log('FormData:', productData);
//     const response = await userInstance.post(`http://localhost:8000/createreview/${productId}`, { ...productData, productId });
//     console.log('Response:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating post:', error);
//     console.error('Error Details:', error.response ? error.response.data : error);
//     throw error;
//   }
// };


// export const getUserReviewList = async (productId) => {
//   try {
//     const response = await userInstance.get(`http://localhost:8000/reviewlist/${productId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user reviews:', error);
//     throw error;
//   }

// };




export const getProductDetails = (productId) => {
return userInstance.get(`/shop/${productId}`);
};


// export const getReviews = (productId) => {
//   return userInstance.get(`/reviews/${productId}`);
// };

//ADD Cart


export const addToCart = (productId, quantity) => {
  return userInstance.post("/cart/add", { productId, quantity });
};


export const getCart = () => {
  return userInstance.get("/cart");
}


// Remove from cart
export const removeFromCart = (productId) => {
  return userInstance.delete("/cart/remove", {
    data: { productId }
  });
};

// Edit cart
export const editCart = (productId, quantity) => {
  return userInstance.put("/cart/edit", { productId, quantity });
};



// //Wishlist


// export const AddToWishlist = (productId) => {
//   return userInstance.post("/wishlist", { productId });
// };



// export const getWishlist = () => {
//   return userInstance.get("/wishlist");
// };



// export const removeFromWishlist = (productId) => {
//   return userInstance.delete(`/wishlist/remove/${productId}`);
// };


// export const checkProductInWishlist = (productId) => {
//   return userInstance.get(`/wishlist/check/${productId}`);
// };


//Wishlist


export const AddToWishlist = (productId) => {
  return userInstance.post("/wishlist", { productId });
};


export const checkProductInWishlist = (productId) => {
  return userInstance.get(`/wishlist/check/${productId}`);
}


export const getWishlist = () => {
  return userInstance.get("/wishlist");
};



export const removeFromWishlist = (productId) => {
  return userInstance.delete(`/wishlist/remove/${productId}`);
};