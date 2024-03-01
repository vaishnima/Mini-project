import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import UserLogin from '../Pages/User/UserLogin'
import UserProduct from '../Pages/User/UserProduct'
import UserSignUp from '../Pages/User/UserSignUp'
import UserWomens from '../Pages/User/UserWomens'
import UserKids from '../Pages/User/UserKids'
import UserShop from '../Pages/User/UserShop'
import UserMens from '../Pages/User/UserMens'

function UserRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserHome/>} />
            <Route path='/login' element={<UserLogin/>} />
            <Route path='/product' element={<UserProduct/>} />
            <Route path='/signup' element={<UserSignUp/>} />
            <Route path='/womens' element={<UserWomens/>} />
            <Route path='/kids' element={<UserKids/>} />
            <Route path='/Shop' element={<UserShop/>} />
            <Route path='/Mens' element={<UserMens/>} />
        </Routes>
        
    </div>
  )
}
export default UserRouter