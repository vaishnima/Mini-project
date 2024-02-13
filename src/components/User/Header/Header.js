import React from 'react'

function Header() {
  return (
    <div className='Header'>
        <div className='headerbrand'>
            <h1></h1>
            <img className='pic'
            src=""
            alt="img" />

        </div>
        <div className='headerlinks'>
            <ul><ui><a>Latest</a></ui>
            <ui><a>Brands</a></ui>
            <ui><a>Categories</a></ui>
            <ui><a>Support</a></ui></ul>
        </div>
        <div className='hearderbuttons'></div>
        <button className='wishlist'>wishlist</button>
        <button className='favorite'>fav</button>
    </div>
  )
}

export default Header