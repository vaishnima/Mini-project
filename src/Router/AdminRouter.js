import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminHome from '../Pages/Admin/AdminHome'
import AdminLogOut from '../Pages/Admin/AdminLogOut'
import AdminUserData from '../Pages/Admin/AdminUserData'
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminEditProduct from '../Pages/Admin/AdminEditProduct'

function AdminRouter() {
  return (
    <div><Routes>
      <Route path='/' element={<AdminHome/>} />
      <Route path='/login' element={<AdminLogin/>} />
      <Route path='/logout' element={<AdminLogOut/>} />
      <Route path='/userdata' element={<AdminUserData/>} />
      <Route path='/product' element={<AdminEditProduct/>} />
      </Routes>
   </div>
  )
}

export default AdminRouter