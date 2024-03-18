import React from 'react'
import './SignUp.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { signup } from '../../../Services/UserApi';


const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Name is required')
    .min(4, 'Username must be at least 4 characters')
    .max(15, 'Username cannot be more than 15 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{10,11}$/, 'Enter a valid phone number'),
   password: Yup.string()
    .required('password is required')
    .matches(
      /^(?=.[!@#$%^&(),.?":{}|<>])(?=.[0-9].[0-9].[0-9].[0-9])/,
      'password must contain at least one special character and at least four numbers'
    )
    .min(8, 'password must be at least 8 characters'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'passwords must match'
  ),
});
const SignUp = () => {
    const formik = useFormik({
        initialValues: {
        username:'',
        email:'',
        phonenumber:'',
        password:'',
        confirmPassword:'',
    },
    validationSchema:validationSchema,
    onSubmit: async ( values) => {
    const { data } = await signup(values);
        console.log(values);
    }});
  return (
    <div className='logimage'>
      <div className='login-page'>
        <div className='login'>
          <div className='userform'>
           
    <form onSubmit={formik.handleSubmit}>
        <h1>SignUp</h1><br />
        
            <label htmlFor='username'></label>
            <input 
            type="text"
            id='username'
            name='username'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Username'
            />
            {formik.touched.username && formik.errors.username && <div className='errors.message'>{formik.errors.username}</div>}

            <label htmlFor='email'></label>
            <input 
            type='text'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Email Address'
            />
            {formik.touched.email && formik.errors.email && <div className='errors-message'>{formik.errors.email}</div>}
            
            <label htmlFor='phone'></label>
            <input 
            type='text'
            id='phone'
            name='phone'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Phone Number'
            />
            {formik.touched.phonenumber && formik.errors.phonenumber && <div className='errors-message'>{formik.errors.phonenumber}</div>}
            
            <label htmlFor='password'></label>
            <input 
            type='password'
            id='password'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='password'
            />
            {formik.touched.password && formik.errors.password && <div className='errors-message'>{formik.errors.password}</div>}

            <label htmlFor='confirmPassword'></label>
            <input 
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Confirm Password'
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword &&<div className='errors-message'>{formik.errors.confirmPassword}</div>}
            
            <button type='submit'>Submit</button>
            <p className='ptag'>Do you have an account?<Link to = '/login'>login</Link></p>
        
            </form>
   </div>
   </div>
   </div>
   </div>
  )
};

export default SignUp
