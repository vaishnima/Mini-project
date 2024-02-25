import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login'>
    <div className="login-container">
<form className="login-form" action="#" method="post">
  <h2>Login</h2><br></br><br></br>
  <div className="form-group">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required /><br></br><br></br>
  
  
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required /><br></br><br></br>
  </div>
  <button type="submit">Login</button>
</form>
</div>
</div>
  )
}

export default Login