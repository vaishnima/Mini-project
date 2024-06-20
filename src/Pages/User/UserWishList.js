import React from 'react'



import Header from '../../components/User/Header/Header'
import Offers from '../../components/Offers/Offers'
import Footer from '../../components/User/Footer/Footer'
import WishList from '../../components/User/Shop/WishList'

function UserWishList() {
  return (
    <div><Header/><WishList/><Offers/><Footer/></div>
  )
}

export default UserWishList