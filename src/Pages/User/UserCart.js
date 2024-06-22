import React from 'react'
import Header from '../../components/User/Header/Header'
import Offers from '../../components/Offers/Offers'
import Footer from '../../components/User/Footer/Footer'
import Cart from '../../components/User/Cart/Cart'

function UserCart() {
  return (
    <div><Header/><Cart/><Offers/><Footer/></div>
  )
}

export default UserCart
