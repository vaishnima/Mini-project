
import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div className="signup-container">
    <form className="signup-form" action="#" method="post">
      <h2>Signup</h2><br></br>
      <div className="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" />
      </div>
      <button type="submit">Signup</button><br></br><br></br>
      <p>Do you have an account?</p>
      
      
    </form>
  </div>
  )
}

export default SignUp