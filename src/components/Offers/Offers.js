import React from 'react'
import './Offers.css'
import { Link } from 'react-router-dom'
function Offers() {
  return (
    <div className='offers'>
        <div className='offers-left'>
        
            <center><h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p></center>
            <img className='jpg' src='https://t3.ftcdn.net/jpg/04/86/28/04/360_F_486280458_heM6CZDCizvrTkEGIDAoWcbQN5QbxGn6.jpg' alt=''height="20px" width="20px"/>
            </div>
            
        
        <div className='offers-right'>
            <img className='img' src='https://holleygirl.com/cdn/shop/products/4.27.23ShopifyImages_21_500x.jpg?v=1682541602' alt=''height="110px" width="100"/>
            
        </div>
        
    </div>
  )
}

export default Offers