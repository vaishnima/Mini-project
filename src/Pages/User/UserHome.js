import React from 'react'
import Header from '../../components/User/Header/Header'
import HomePage from '../../components/User/HomePage/HomePage'
import Popular from '../../components/Popular/Popular'
import Footer from '../../components/User/Footer/Footer'

function UserHome() {
  return (
    <div><Header/><HomePage/><Popular/><Footer/></div>
  )
}

export default UserHome