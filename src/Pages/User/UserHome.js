import React from 'react'
import Header from '../../components/User/Header/Header'
import HomePage from '../../components/User/HomePage/HomePage'
import Popular from '../../components/Popular/Popular'
import Footer from '../../components/User/Footer/Footer'
import Item from '../../components/Item/Item'
import Newsletter from '../../components/Newsletter/Newsletter'

function UserHome() {
  return (
    <div><Header/><HomePage/><Popular/><Item/><Newsletter/><Footer/></div>
  )
}

export default UserHome