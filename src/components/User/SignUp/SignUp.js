import React from 'react'
import './SignUp.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  username: Yup.string()
  .required('Name is required')
  .min(4, 'Username must be atleat 4 characters')
  .max(15, 'Username cannot be more than 15 characters'),
  email: Yup.string()
  .email('Invalid email format')
  .required('Email is required'),
  phone: Yup.string()
  .required('Phone number is required')
  .matches(/^\d{10,11}$/, 'Enter a valid phone number'),
  password: Yup.string()
  .required('Password is required')
  .matches( /^(?=.*[!@#$%&*(),.?":{}|<>])(?=.*[0-9].*[0-9].[*0-9].*[0-9])/,
  'Password must contain at least special character and at least four members'
  )
  .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'passwords must match'
  ),
});
// const validate = values => {
//     const errors = {};
//     if(!values.username){
//         errors.username ='Required';
//         errors.username = 'please enter a valid username.';
//     }
//     if(!values.email){
//         errors.email = 'Required';
//     }else if(!/^[A-Z0-9.com_%+-]+@[A-Z0-9.com-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email = 'please enter a valid email address.';

//     }
//     if(!values.phonenumber){
//         errors.phone = 'Required';

//     }else if (!/^\d{10}$/i.test(values.phonenumber)){
//         errors.phonenumber = 'please enter a valid phone number';

//     }
//     if (!values.password){
//         errors.password = 'Required';
//     }else if(values.password.length < 8) {
//         errors.Password = 'Passwords must be at least 8 characters long';
//     }
//     if (!values.confimPassword){
//         errors.confirmPassword = 'Required';
//     }else if(values.confirmPassword !== values.password){
//         errors.confirmPassword = 'Passwords must match';
//     }
//     return errors;
// };
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
    onSubmit: async () => {
    //    console.log(values);
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
            
            <label htmlFor='Password'></label>
            <input 
            type='password'
            id='password'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Password'
            />
            {formik.touched.password && formik.errors.password && <div className='errors-message'>{formik.errors.password}</div>}

            <label htmlFor='confirmPassword'></label>
            <input 
            type='Password'
            id='confirmPassword'
            name='confirmPassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Confirm Password'
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword &&<div className='errors-message'>{formik.errors.confirmPassword}</div>}
            
            <button>Submit</button>
            <p className='ptag'>Do you have an account?<Link to = '/login'>login</Link></p>
        
            </form>
   </div>
   </div>
   </div>
   </div>
  )
};

export default SignUp