import React from 'react'
import './Login.css'
import { Formik, Form, ErrorMessage } from 'formik';
function Login() {
  return (
    <div className='login'><h1 className='head'>STYLE SAVVY</h1>
      <div className="login-container">
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.username) {
              errors.username = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="login-form">
              <h2>Login</h2><br /><br />
              <div className="form-group">
                <label htmlFor="username"></label>
                <input type="text" id="username" name="username" placeholder='Username' />
                <ErrorMessage name="username" component="div" />
                <br /><br />

                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" placeholder='Password'/>
                <ErrorMessage name="password" component="div" />
                <br /><br />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
              <p className='sign'>Do you have an account?<a href='/signup'>SignUp</a></p>
      
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login