import React from 'react'
import * as Yup from 'yup';
import { login } from '../../../Services/AdminApi';
import { useNavigate,Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { toast } from 'react-toastify';

function LoginPage() {
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
        navigate("/admin");

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
            <h2>Admin Login</h2> <br />
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
}

export default LoginPage