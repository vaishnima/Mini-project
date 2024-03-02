import React from 'react'
import { useFormik } from 'formik';
const validate = values => {
    const errors = {};
    if(!values.username){
        errors.username ='Required';
        errors.username = 'please enter a valid username.';
    }
    if(!values.email){
        errors.email = 'Required';
    }else if(!/^[A-Z0-9.com_%+-]+@[A-Z0-9.com-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'please enter a valid email address.';

    }
    if(!values.phonenumber){
        errors.phone = 'Required';

    }else if (!/^\d{10}$/i.test(values.phonenumber)){
        errors.phonenumber = 'please enter a valid phone number';

    }
    if (!values.password){
        errors.password = 'Required';
    }else if(values.password.length < 8) {
        errors.Password = 'Passwords must be at least 8 characters long';
    }
    if (!values.confimPassword){
        errors.confirmPassword = 'Required';
    }else if(values.confirmPassword !== values.password){
        errors.confirmPassword = 'Passwords must match';
    }
    return errors;
};
const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
        username:'',
        email:'',
        phonenumber:'',
        password:'',
        confirmPassword:'',
    },
    validate,
    onSubmit: values => {
       console.log(values);
    },
    });
  return (
    <form onSubmit={formik.handleSubmit}>
        <h1>SignUp</h1>
        <div>
            <label htmlFor='username'>Username</label>
            <input 
            type="text"
            id='username'
            name='username'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}/>
            {formik.touched.username && formik.errors.username ?(
                <div>{formik.errors.username}</div>
            ):null}
           
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input
            type='text'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.errors.email} placeholder='Email'
            />
            {formik.touched.email && formik.errors.email?(
                <div>{formik.errors.email}</div>
            ):null}
            </div>
            
            <div>
            <label htmlFor='phone'>Phone Number</label>
            <input
            type='text'
            id='phone'
            name='phone'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.errors.phonenumber}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber?(
                <div>{formik.errors.phonenumber}</div>
            ):null}
            </div>
            
            <div>
            <label htmlFor='Password'>Password</label>
            <input
            type='password'
            id='password'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.errors.password}
            />
            {formik.touched.password && formik.errors.password?(
                <div>{formik.errors.password}</div>
            ):null}
            </div>
        
            <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
            type='Password'
            id='confirmPassword'
            name='confirmPassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.errors.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword?(
                <div>{formik.errors.confirmPassword}</div>
            ):null}
            </div>
            <button type='submit'>Submit</button>
            <p className='do'>Do you have an account?<a href='/login'>Login</a></p>
        
    </form>
    
  )
};

export default SignUpForm