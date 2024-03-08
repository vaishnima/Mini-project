import React from 'react'
import './Login.css'
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'password must be at least 8 characters').required('password is required'),
});
const Login = () => {
  

  const formik = useFormik({
    initialValues: {
      email:'',
      password:'',
    },
    validationSchema:validationSchema,
    onSubmit: async () => {

 }});
  return(
    <div className='logimage'>
      <div className='login-page'>
        <div className='login'>
          <div className='userform'>
            <form onSubmit={formik.handleSubmit}>
            <h2>User Login</h2> <br />
            <label></label>
            <input
            type='email'
            name='email'
            placeholder='Email Address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email && <div className='errors-message'>{formik.errors.email}</div>}
            <label></label>
            <input
            type='password'
            name='password'
            placeholder='********'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password && <div className='errors-message'>{formik.errors.password}</div>}
            <button>Login</button>
            <p className='ptag'>Don't have an account?<Link to = '/signup'>SignUp</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
  // function Login() {
  //   return (
  //   <div className='login'><h1 className='head'>STYLE SAVVY</h1>
  //     <div className="login-container">
  //       <Formik className='for'
  //         initialValues={{ username: '', password: '' }}
  //         validate={values => {
  //           const errors = {};
  //           if (!values.username) {
  //             errors.username = 'Required';
  //           }
  //           if (!values.password) {
  //             errors.password = 'Required';
  //           }
  //           return errors;
  //         }}
  //         onSubmit={(values, { setSubmitting }) => {
  //           setTimeout(() => {
  //             alert(JSON.stringify(values, null, 2));
  //             setSubmitting(false);
  //           }, 400);
  //         }}
  //       >
  //         {({ isSubmitting }) => (
  //           <Form className="login-form">
  //             <h2>Login</h2><br /><br />
  //             <div className="form-group">
  //               <label className='fst' htmlFor="email address"></label>
  //               <input className='em' type="text" id="email address" name="email address" placeholder='Email Address' />
  //               <ErrorMessage className='err1' name="email address" component="div" />
  //               <br /><br />

  //               <label className='sct' htmlFor="password"></label>
  //               <input className='pass' type="password" id="password" name="password" placeholder='Password'/>
  //               <ErrorMessage className='err2' name="password" component="div" />
  //               <br /><br />
  //             </div>
  //             <button type="submit" disabled={isSubmitting}>
  //               {isSubmitting ? 'Logging in...' : 'Login'}
  //             </button>
  //             <p className='sign'>Do you have an account?<a href='/signup'>SignUp</a></p>
      
  //           </Form>
  //         )}
  //       </Formik>
  //     </div>
  //   </div>
  
}

export default Login