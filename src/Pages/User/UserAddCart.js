import React from 'react'
import Header from '../../components/User/Header/Header'
import Footer from '../../components/User/Footer/Footer'
import Offers from '../../components/Offers/Offers'
import AddCart from '../../components/User/AddCart/AddCart'

function UserAddCart() {
  return (
    <div><Header/><AddCart/><Offers/><Footer/></div>
  )
}

export default UserAddCart