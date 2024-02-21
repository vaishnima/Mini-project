import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import UserLogin from '../Pages/User/UserLogin'
import UserProduct from '../Pages/User/UserProduct'
import UserSignUp from '../Pages/User/UserSignUp'
function UserRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserHome/>} />
            <Route path='/login' element={<UserLogin/>} />
            <Route path='/product' element={<UserProduct/>} />
            <Route path='/signup' element={<UserSignUp/>} />
        </Routes>
        
    </div>
  )
}
export default UserRouter