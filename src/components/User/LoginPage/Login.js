import React from 'react'
import './Login.css'
function Login() {
  return (
    
    <div className='login'><h2 className='head'>STYLE SAVVY</h2>
  
    <div className="login-container">
    
<form className="login-form" action="#" method="post">
  <h2>Login</h2><br></br><br></br>
  <div className="form-group">
    <input type='text'placeholder='Username' />
    <input type='password'placeholder='Password' />
    </div>
  <button type="submit">Login</button>
  
  <p className="sign">Don't have an account?<a href='/signup'>SignUp</a></p>
  
  
</form>
</div>
</div>
  )
}

export default Login