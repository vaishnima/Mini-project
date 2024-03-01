import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
    <div className="footer-logo">
      <img src='https://down-my.img.susercontent.com/file/my-11134207-7qul7-lj5c38hjp5qe3a' alt='' height="110px" width="150"/>
      <p>STYLE SAVVY</p></div>
        <ul className="footer-links">
            <li><a href="#">Company</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Offices</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
            
        </ul>
        <div className='footer-social-icon'>
          <div className='footer-icons-container'>
            <img src='https://pixsector.com/cache/200e7bcc/av16efeffeed4418c90c1.png' alt='' height="25px" width="25px"/>
          </div>
          <div className='footer-icons-container'>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/022/352/290/small_2x/pinterest-icon-social-media-icons-design-singel-pinterest-icon-free-vector.jpg' alt='' height="28px" width="28px"/>
          </div>
          <div className='footer-icons-container'>
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-whatsapp-2254775-1881161.png' alt='' height="18px" width="18px"/>
          </div>
    </div>
    <div className='footer-copyright'>
      <hr />
      <p>copyright @ 2024 - all right diserved</p>
    </div>

</div>
  )
}

export default Footer