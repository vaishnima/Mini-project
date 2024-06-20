import { adminInstance } from "../axios/axiosInstance";

//POST METHODS

export const login = (value) =>{
    
    return adminInstance.post('/login',{...value})
}


// export const Products = (value) => {
//     return adminInstance.post("/add", {...value});
// }
// export const Products = (formData) => {
//     return adminInstance.post("/add", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   };
export const Products = (value) => {
  return adminInstance.post("/add",{...value});
}


// //GET METHODS

export const userData = () => {
    return adminInstance.get("/user");
};

export const productList = () => {
  return adminInstance.get('/product');
};

// export const viewProducts = () => {
//   return adminInstance.get("/view");
// };
  
  //PUT
  
  // export const updateProduct = (productId, value) => {
  //   return adminInstance.put(`/products/${productId}`, { ...value });
  // };
  
  // export const disableProduct = (productId) => {
  //   return adminInstance.put(`/products/${productId}/disable`);
  // };
  
  // export const blockUser = (userId) => {
  //   return adminInstance.put(`/users/${userId}/block`);
  // }

  //DELETE Methods
export const removeUser = (userId) => {
  return adminInstance.delete(`/user/${userId}`);
};

export const deleteProduct=(productId)=>{
  return adminInstance.delete(`/product/${productId}`)
}


//PUT Method

export const editProduct = (id, productData) => {
  return adminInstance.put(`/product/${id}`, productData);
};


// Fetch product details by ID

export const getProductById = (id) => {
  return adminInstance.get(`/product/${id}`);
};