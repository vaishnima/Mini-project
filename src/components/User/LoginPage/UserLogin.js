import React from 'react'
import './UserLogin'
function UserLogin() {
  return (
    <div className='userlogin'>
    <div class="login-container">
<form class="login-form" action="#" method="post">
  <h2>Login</h2>
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" required />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required />
  </div>
  <button type="submit">Login</button>
</form>
</div>
</div>
  )
}

export default UserLogin