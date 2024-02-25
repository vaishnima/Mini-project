import React from 'react'
import './SignUp.css'
function SignUp() {
  return (
    <div className="signup-container">
    <form className="signup-form" action="#" method="post">
      <h2>Signup</h2><br></br>
      <div className="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>
      </div>
      <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div className="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <div className="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required/>
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
  )
}

export default SignUp