import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminHome from '../Pages/Admin/AdminHome'
import AdminLogOut from '../Pages/Admin/AdminLogOut'
import AdminUserData from '../Pages/Admin/AdminUserData'
import AdminLogin from '../Pages/Admin/AdminLogin'

import AdminAddProduct from '../Pages/Admin/AdminAddProduct'
import AdminProductList from '../Pages/Admin/AdminProductList'

// import AdminErrorPage from '../pages/Admin/AdminErrorPage'
import AdminOrderList from '../Pages/Admin/AdminOrderList'
import AdminEditProduct from '../Pages/Admin/AdminEditProduct'

function AdminRouter() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<AdminHome/>} />
      <Route path='/login' element={<AdminLogin/>} />
      <Route path='/logout' element={<AdminLogOut/>} />
      <Route path='/userdata' element={<AdminUserData/>} />
      <Route path='/product' element={<AdminProductList/>} />
      <Route path='/add' element={<AdminAddProduct/>} />
      
      {/* <Route path='/view' element={<AdminViewProducts/>}/>
       <Route path='/add' element={<AdminAddProducts/>}/>*/}
       <Route path='/edit/:id' element={<AdminEditProduct/>} />
       {/* <Route path='*' element={<AdminErrorPage/>} /> */}
       <Route path='/order' element={<AdminOrderList/>} />
      </Routes>
   </div>
  )
}

export default AdminRouter