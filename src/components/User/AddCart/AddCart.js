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


import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import './AddCart.css';
import { UserContext } from '../../Context/UserContext';

const AddCart = () => {
  const { addToCart, removeFromCart } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      productId: '',
      quantity: 1,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      productId: Yup.string().required('Product ID is required'),
      quantity: Yup.number().required('Quantity is required').min(1, 'Quantity must be at least 1'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await addToCart(values.email, values.productId, values.quantity);
        toast.success('Product added to cart successfully');
        resetForm();
      } catch (error) {
        toast.error(error.response?.data?.message || 'Something went wrong');
      }
    },
  });

  const handleRemove = async () => {
    try {
      await removeFromCart(formik.values.email, formik.values.productId);
      toast.success('Product removed from cart successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="add-cart">
      <h2>Manage Cart</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="productId">Product ID</label>
          <input
            id="productId"
            name="productId"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productId}
          />
          {formik.touched.productId && formik.errors.productId ? (
            <div className="error">{formik.errors.productId}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quantity}
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <div className="error">{formik.errors.quantity}</div>
          ) : null}
        </div>

        <button type="submit">Add to Cart</button>
      </form>
      <button onClick={handleRemove}>Remove from Cart</button>
    </div>
  );
};

export default AddCart;
