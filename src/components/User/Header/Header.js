import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
  const [link,setLink] = useState("shop");
  return (
    <div className='Header'>
        <div className='headerbrand'>
            <h1></h1>
            <img className='pic'
            // src="https://down-my.img.susercontent.com/file/my-11134207-7qul7-lj5c38hjp5qe3a"
            
            src='https://img.freepik.com/premium-photo/shocked-young-woman-holding-shopping-bags_176532-101.jpg'
            
            alt="" height="110px" width="150"/>
         <p className='clr'>STYLE SAVVY </p>
        </div>
        <div>
            <ul className='headerlinks'>
            <li onClick={()=>(setLink("shop"))}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{link==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>(setLink("mens"))}><Link style={{ textDecoration: 'none'}} to='/mens'>Mens</Link>{link==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>(setLink("womens"))}><Link style={{ textDecoration: 'none'}} to='/womens'>Womens</Link>{link==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>(setLink("kids"))}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{link==="kids"?<hr/>:<></>}</li></ul>
        </div>
        
        <div className='hearderbuttons'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/signup'><button>SignUp</button></Link>
        <Link to='/wishlist' ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bjhvrKW4O8paiEJrdFsw3S-oEPEz6uL3vQ&s'alt=''height='20px'width='20px'/></Link>

        <Link to='/addcart'><img src="data:image/png;base64,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"alt="" height="30px" width="30px"/></Link>
        <div className='header-count'>0</div>
    </div></div>
  )
}

export default Header