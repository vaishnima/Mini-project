import React from 'react'
import Header from '../../components/User/Header/Header'
import Shop from '../../components/User/Shop/Shop'
import Footer from '../../components/User/Footer/Footer'
import Offers from '../../components/Offers/Offers'

function UserShop() {
  return (
    <div>
        <Header/><Shop/><Offers/><Footer/>
    </div>
  )
}

export default UserShop