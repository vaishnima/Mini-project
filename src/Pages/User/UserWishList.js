import React from 'react'



import Header from '../../components/User/Header/Header'
import Offers from '../../components/Offers/Offers'
import Footer from '../../components/User/Footer/Footer'

import Wishlist from '../../components/User/WishList/WishList'



function UserWishList() {
  return (
    <div><Header/><Wishlist/><Offers/><Footer/></div>
  )
}

export default UserWishList