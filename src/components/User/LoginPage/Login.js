import React from 'react';
import './Login.css';
import * as Yup from 'yup';
import { login } from '../../../Services/UserApi';
import { useNavigate,Link } from 'react-router-dom';
import { useFormik } from 'formik';
//  import 'react-toastify/dist/ReactToastify.css';
//  import { ToastContainer } from 'react-toastify';

import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'password must be at least 8 characters').required('password is required'),
});



  const formik = useFormik({
    initialValues: {
      email:'',
      password:'',
    },
    validationSchema:validationSchema,
    onSubmit: async (values) => {
    
      try{
        console.log("On submit !!!");
      const { data } = await login(values);
      console.log(data, "USER RETURN DATA !!!");
      if(data.created){
        localStorage.setItem("jwt", data.token);
        toast.success("Login Success", { position:"top-right" });
        navigate("/");

      }else {
        toast.error(data.message, { position:"top-right" });
      }
    } catch (error) {
      console.log(error);
      
    }
},
});


  return(
    
    <div className='logimage'>
      <div className='login-page'>
        <div className='login'>
          <div className='userform'>
            <form onSubmit={formik.handleSubmit}>
            <h2>Login</h2> <br />
            <label></label>
            <input
            type='email'
            name='email'
            id='loginEmail'
            placeholder='Email Address'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email && <div className='errors-message'>{formik.errors.email}</div>}
            <label></label>
            <input
            type='password'
            name='password'
            id='loginPassword'
            placeholder='********'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password && <div className='errors-message'>{formik.errors.password}</div>}
            
            <button>Login</button>
            
            <p className='ptag'>Don't have an account?<Link to = '/signup'>SignUp</Link></p>
            </form>
          </div>
        </div>
          {/* <ToastContainer/>   */}
      </div> 
    </div>

  )
    
}

export default Login
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
