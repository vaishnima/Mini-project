
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getProductById, editProduct } from '../../../Services/AdminApi'; // Ensure you have a service function to get a product by ID
// import './EditProduct.css'

// function EditProduct() {
//     const [product, setProduct] = useState({ id: '', name: '', brand: '', description: '' , price: 0, gender: '', isLuxury: false, dateAdded: '', category: '' });
//     const { productId } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch the product details when the component mounts
//         async function fetchProduct() {
//             try {
//                 const productData = await getProductById(productId); // Replace with your actual function to get product by ID
//                 setProduct(productData);
//             } catch (error) {
//                 console.error("Error fetching product:", error);
//             }
//         }
//         fetchProduct();
//     }, [productId]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await editProduct(productId, product); // Update product details
//             console.log("Updated Product:", product);
//             navigate('/admin/view'); // Navigate to the products page after submission
//         } catch (error) {
//             console.error("Error updating product:", error);
//         }
//     };

//     return (
//         <div className='adminEditProduct'>
//             <h1>Edit Product</h1>
//             <div className="editProductSection">
//                 <form onSubmit={handleSubmit}>
//                     <div className="editProductInputDiv">
//                         <label>ID</label>
//                         <input
//                             type="number"
//                             name="id"
//                             value={product.id}
//                             onChange={handleInputChange}
//                             placeholder="ENTER PRODUCT ID..."
//                             id="input"
//                             disabled // Disable the ID field as it should not be editable
//                         />
//                     </div>
//                     <br />
//                     <div className="editProductInputDiv">
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={product.name}
//                             onChange={handleInputChange}
//                             placeholder="ENTER NAME HERE..."
//                             id="input"
//                         />
//                     </div>
//                     <br />
//                     <div className="editProductInputDiv">
//                         <label>Brand</label>
//                         <select
//                             name="brand"
//                             value={product.brand}
//                             onChange={handleInputChange}
//                             id="input"
//                         >
//                             <option value="Eyka">Eyka</option>
//                             <option value="Sera">Sera</option>
//                             <option value="Ausk">Ausk</option>
//                             <option value="Vamsee">Vamsee</option>
//                         </select>
//                     </div>
//                     <br />
//                     <div className="editProductInputDiv">
//                         <label>Description</label>
//                         <textarea
//                             name="description"
//                             value={product.description}
//                             onChange={handleInputChange}
//                             placeholder="PRODUCT DESCRIPTION..."
//                             id="input"
//                         />
//                     </div>
//                     <br />
//                     <div className="editProductInputDiv">
//                         <label>Price</label>
//                         <input
//                             type="number"
//                             name="price"
//                             value={product.price}
//                             onChange={handleInputChange}
//                             placeholder="ENTER PRICE HERE ..."
//                             id="input"
//                         />
//                     </div>
//                     <br />
//                     <div className="editProductInputDiv">
//                         <label>Date Added</label>
//                         <input
//                             type="text"
//                             name="dateAdded"
//                             value={product.dateAdded}
//                             onChange={handleInputChange}
//                             placeholder="YYYY-MM-DD"
//                             id="input"
//                         />
//                     </div>
//                     <br />
//                     <div className="editProductInputDiv">
//                         <label>Category</label>
//                         <select
//                             name="category"
//                             value={product.category}
//                             onChange={handleInputChange}
//                             id="input"
//                         >
//                             <option value="mens">Mens</option>
//                             <option value="womens">Womens</option>
//                             <option value="kids">Kids</option>
//                         </select>
//                     </div>
//                     <br />
//                     <button type="submit" id="editProductBtn">
//                         Save Changes
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default EditProduct;


// import React, { useEffect, useRef, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import { getProductById, editProduct } from "../../../Services/AdminApi";
// import "./EditProduct.css";

// const EditProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const formikRef = useRef(null); 

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await getProductById(id);
//         if (response.status === 200 && response.data) {
//           formikRef.current.setValues({
//             name: response.data.name,
//             price: response.data.price,
//             description: response.data.description,
//             image: response.data.image,
//             category: response.data.category,
//           });
//         } else {
//           throw new Error("Failed to fetch product details");
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error); 
//         setError("There was an error fetching the product!");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       price: "",
//       description: "",
//       image: "",
//       category: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Product name is required"),
//       price: Yup.number().required("Price is required").positive("Price must be positive"),
//       description: Yup.string().required("Description is required"),
//       image: Yup.string().required("Image URL is required"),
//       category: Yup.string().required("Category is required"),
//     }),
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         const { image, ...editProductData } = values;
//         const response = await editProduct(id, editProductData);
//         if (response.status === 200) {
//           toast.success(response.data.message);
//           navigate("/admin/product"); 
//         } else {
//           throw new Error("Failed to update product");
//         }
//       } catch (error) {
//         console.error("Error updating product:", error);
//         toast.error(error.response?.data?.error || "Something went wrong");
//       }
//     },
//   });

//   formikRef.current = formik;

//   useEffect(() => {
    
//     console.log("Formik values:", formik.values);
//   }, [formik.values]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="edit-product">
//       <h2>Edit Product</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label htmlFor="name">Product Name</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div className="error">{formik.errors.name}</div>
//           ) : null}
//         </div>

//         <div>
//           <label htmlFor="price">Price</label>
//           <input
//             id="price"
//             name="price"
//             type="number"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.price}
//           />
//           {formik.touched.price && formik.errors.price ? (
//             <div className="error">{formik.errors.price}</div>
//           ) : null}
//         </div>

//         <div>
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.description}
//           ></textarea>
//           {formik.touched.description && formik.errors.description ? (
//             <div className="error">{formik.errors.description}</div>
//           ) : null}
//         </div>

//         <div>
//           <label htmlFor="image">Image URL</label>
//           <input
//             id="image"
//             name="image"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.image}
//           />
//           {formik.touched.image && formik.errors.image ? (
//             <div className="error">{formik.errors.image}</div>
//           ) : null}
//         </div>

//         <div>
//           <label htmlFor="category">Category</label>
//           <select
//             id="category"
//             name="category"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.category}
//           >
//             <option value="" label="Select category" />
//             <option value="Mens" label="Mens" />
//             <option value="Womens" label="Womens" />
//             <option value="Kids" label="Kids" />
//           </select>
//           {formik.touched.category && formik.errors.category ? (
//             <div className="error">{formik.errors.category}</div>
//           ) : null}
//         </div>

//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;


import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { getProductById, editProduct } from "../../../Services/AdminApi";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const formikRef = useRef(null); 

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await getProductById(id);
        if (response.status === 200 && response.data) {
          formikRef.current.setValues({
            name: response.data.name,
            price: response.data.price,
            description: response.data.description,
            image: response.data.image,
            category: response.data.category,
          });
        } else {
          throw new Error("Failed to fetch product details");
        }
      } catch (error) {
        console.error("Error fetching product:", error); 
        setError("There was an error fetching the product!");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      image: "",
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Product name is required"),
      price: Yup.number().required("Price is required").positive("Price must be positive"),
      description: Yup.string().required("Description is required"),
      image: Yup.string().required("Image URL is required"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const { image, ...editProductData } = values;
        const response = await editProduct(id, editProductData);
        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/admin/product"); 
        } else {
          throw new Error("Failed to update product");
        }
      } catch (error) {
        console.error("Error updating product:", error);
        toast.error(error.response?.data?.error || "Something went wrong");
      }
    },
  });

  formikRef.current = formik;

  useEffect(() => {
    console.log("Formik values:", formik.values);
  }, [formik.values]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="error">{formik.errors.price}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="error">{formik.errors.image}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          >
            <option value="" label="Select category" />
            <option value="Mens" label="Mens" />
            <option value="Womens" label="Womens" />
            <option value="Kids" label="Kids" />
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div className="error">{formik.errors.category}</div>
          ) : null}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;




