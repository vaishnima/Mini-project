import React from 'react'
import Header from '../../components/User/Header/Header'
import HomePage from '../../components/User/HomePage/HomePage'
import Popular from '../../components/Popular/Popular'

function UserHome() {
  return (
    <div><Header/><HomePage/><Popular/></div>
  )
}

export default UserHome