import React from 'react'
import './SignUp.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { signup } from '../../../Services/UserApi';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

    
       const initialValues = {
        username:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
    };
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
    // .matches(
    //   /^(?=.[!@#$%^&(),.?":{}|<>])(?=.[0-9].[0-9].[0-9].[0-9])/,
     .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    
       'password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.'
     ),
    // .min(8, 'password must be at least 8 characters'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'passwords must match'
  )
  .required('Confirm Password is required'),
});

   const onSubmit = async  (values) => {
    console.log(values);
    const { data } = await signup(values);
        
        navigate("/login");
    }
    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });
  
  
  return (
    <div>
      <div className='logimage'>
        <div className='login-page'>
          <div className='login'>
            <div className='userform'>
              <form onSubmit={formik.handleSubmit}>
                <div className='login-header'>
                  <h1>SignUp</h1><br />
                </div>

                <label></label>
                <input
                  type="text"
                  name="username"
                  id="signupName"
                  value={formik.values.username}
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="error-message">{formik.errors.username}</div>
                )}

                <label></label>
                <input
                  type="text"
                  name="phone"
                  id="signupPhone"
                  value={formik.values.phone}
                  placeholder="Enter your phone number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="error-message">{formik.errors.phone}</div>
                )}

                <label></label>
                <input 
                  type='email'
                  name='email'
                  id='signupEmail'
                  placeholder='Enter the email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <div className="error-message">{formik.errors.email}</div>}


                <label></label>
                <input 
                  type='password'
                  name='password'
                  id='signupPassword'
                  placeholder='Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />{formik.touched.password && formik.errors.password && <div className="error-message">{formik.errors.password}</div>}

                <label></label>
                <input
                  type="password"
                  name="confirmPassword"
                  id='confirmPassword'
                  value={formik.values.confirmPassword}
                  placeholder="Confirm password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <div className="error-message">{formik.errors.confirmPassword}</div>
                )}

                <button type='submit'>submit</button>
                <div className='ptag'>
                  <p >Do you have an account? <Link to='/login'>Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default SignUp  
//     <div className='logimage'>
//       <div className='login-page'>
//         <div className='login'>
//           <div className='userform'>
           
//     <form onSubmit={formik.handleSubmit}>
//         <h1>SignUp</h1><br />
        
//             <label htmlFor='username'></label>
//             <input 
//             type="text"
//             id='username'
//             name='username'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder='User Name'
//             />
//             {formik.touched.username && formik.errors.username && <div className='errors.message'>{formik.errors.username}</div>}

//             <label htmlFor='email'></label>
//             <input 
//             type='text'
//             id='email'
//             name='email'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder='Email Address'
//             />
//             {formik.touched.email && formik.errors.email && <div className='errors-message'>{formik.errors.email}</div>}
            
//             <label htmlFor='phone'></label>
//             <input 
//             type='text'
//             id='phone'
//             name='phone'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder='Phone'
//             />
//             {formik.touched.phone && formik.errors.phone && <div className='errors-message'>{formik.errors.phone}</div>}
            
//             <label htmlFor='password'></label>
//             <input 
//             type='password'
//             id='password'
//             name='password'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder='Password'
//             />
//             {formik.touched.password && formik.errors.password && <div className='errors-message'>{formik.errors.password}</div>}

//             <label htmlFor='confirmPassword'></label>
//             <input 
//             type='password'
//             id='confirmPassword'
//             name='confirmPassword'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder='Confirm Password'
//             />
//             {formik.touched.confirmPassword && formik.errors.confirmPassword &&<div className='errors-message'>{formik.errors.confirmPassword}</div>}
            
//             <button className='acc'type='submit'>Submit</button>
//             <p className='ptag'>Do you have an account?<Link to = '/login'>Login</Link></p>
        
//             </form>
//    </div>
//    </div>
//    </div>
//    </div>
//   );
// }


