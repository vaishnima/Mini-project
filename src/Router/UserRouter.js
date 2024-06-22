import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import UserLogin from '../Pages/User/UserLogin'
import UserProduct from '../Pages/User/UserProduct'
import UserSignUp from '../Pages/User/UserSignUp'
import UserWomens from '../Pages/User/UserWomens'
import UserKids from '../Pages/User/UserKids'

import UserMens from '../Pages/User/UserMens'
import UserSingleProduct from '../Pages/User/UserSingleProduct'
import UserWishList from '../Pages/User/UserWishList'
import UserCart from '../Pages/User/UserCart'
// import Createreview from '../components/User/CreateReview'
// import { userInstance } from '../axios/axiosInstance'





function UserRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserHome/>} />
            <Route path='/login' element={<UserLogin/>} />
            <Route path='/latestcollections' element={<UserProduct/>} />
            <Route path='/signup' element={<UserSignUp/>} />
            
            <Route path='/womens' element={<UserWomens/>} />
            <Route path='/kids' element={<UserKids/>} />
            
            <Route path='/shop/:productId' element={<UserSingleProduct/>}/>
            <Route path='/mens' element={<UserMens/>} />
            {/* <Route path='/wishlist' element={<UserWishList/>} /> */}
            <Route path='/wishlist' element={<UserWishList/>} />
            <Route path='/addcart' element={<UserCart/>} />
             {/* <Route path='/createreview/:productid' element={<Createreview/>} /> */}
        </Routes>
        
    </div>
  )
}
export default UserRouter