
// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import "./AddProduct.css";

// import { Products } from "../../../Services/AdminApi";

// function AddProduct() {
//   const initialValues = {
//     name: "",
//     brand: " ",
//     image:" ",
//     description: "",
//     price: "",
//     dateAdded: "",
//     category: "Men",
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     description: Yup.string().required("Description is required"),
//     price: Yup.number().required("Price is required"),
//     dateAdded: Yup.string().required("Date Added is required"),
//   });

//   const onSubmit = async (values) => {
//     values.dateAdded = new Date(values.dateAdded);
    
//     console.log(values);
//      const response = await Products(values);
//     console.log(response); // Log the entire response object
  
//     const { data } = response;
//     if (!data) return toast.error("Failed to add product");
//     if (data.name) {
//       toast.success(`${data.name} has been added`);
//     } else {
//       toast.success("Product has been added successfully");
//     }
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });

//   return (
//     <div className="addProduct">
//       <h1>Add Product</h1>
//       <div className="addProductSection">
//         <form onSubmit={formik.handleSubmit}>
//           <div className="addProductInputDiv">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="ENTER NAME HERE..."
//             />
//             {formik.touched.name && formik.errors.name && (
//               <p
//                 className="error-message"
//                 style={{ marginTop: "5px", color: "red" }}
//               >
//                 {formik.errors.name}
//               </p>
//             )}
//           </div>
        
         
//           <br />
//           <div className="addProductInputDiv">
//             <label>Description</label>
//             <textarea
//               name="description"
//               value={formik.values.description}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="PRODUCT DESCRIPTION..."
//             />
//             <div className="image">
//               <input type="file" name="image" className="file-image" placeholder="choose an image"></input>
//             </div>
//             {formik.touched.description && formik.errors.description && (
//               <p
//                 className="error-message"
//                 style={{ marginTop: "5px", color: "red" }}
//               >
//                 {formik.errors.description}
//               </p>
//             )}
//           </div>
//           <br />
//           <div className="addProductInputDiv">
//             <label>Price</label>
//             <input
//               type="number"
//               name="price"
//               value={formik.values.price}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="ENTER PRICE HERE ..."
//             />
//             {formik.touched.price && formik.errors.price && (
//               <p
//                 className="error-message"
//                 style={{ marginTop: "5px", color: "red" }}
//               >
//                 {formik.errors.price}
//               </p>
//             )}
//           </div>
          
         
  
//           <br />
//           {/* <div className="addProductInputDiv">
//             <label>Date Added</label>
//             <input
//               type="text"
//               name="dateAdded"
//               value={formik.values.dateAdded}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="YYYY - MM - DD"
//             />
//             {formik.touched.dateAdded && formik.errors.dateAdded && (
//               <p
//                 className="error-message"
//                 style={{ marginTop: "5px", color: "red" }}
//               >
//                 {formik.errors.dateAdded}
//               </p>
//             )}
//           </div>
//           <br /> */}
//           <div className="addProductInputDiv">
//             <label>Category</label>
//             <select
//               name="category"
//               value={formik.values.category}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             >
              
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="Kids">Kids</option>
//             </select>
//           </div>
//           <br />
//           <button type="submit" id="AddProductBtn">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;


import React from 'react';
import './AddProduct.css'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Products } from '../../../Services/AdminApi'; 

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      image: '',
      category: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Product name is required'),
      price: Yup.number().required('Price is required').positive('Price must be positive'),
      description: Yup.string().required('Description is required'),
      image: Yup.string().required('Image URL is required'),
      category: Yup.string().required('Category is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await Products(values); 
        toast.success(response.data.message);
        resetForm();
      } catch (error) {
        toast.error(error.response?.data?.error || 'Something went wrong');
      }
    },
  });

  return (
    <div className="add-product">
      <h2>Add Product</h2>
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

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;