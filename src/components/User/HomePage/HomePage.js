import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div className='home'>
      
        <div ><h5 className='home-left'>NEW ARRIVALS ONLY
        
          <p>new</p><p>collections</p>
            <p>for everyone</p></h5>
          <img className="home-hand-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NRFPGcMY9f3nIz8CW0J-Dbe_B8B-ZLmHqw&usqp=CAU" alt=''/>
        
            
            
          
          <Link to='/product'><button className="home-latest-btn">Latest Collections</button></Link>
              
              </div>
              
                <img className='home-right'src='https://st4.depositphotos.com/12985790/20643/i/450/depositphotos_206432966-stock-photo-attractive-fashionable-woman-posing-white.jpg'alt=''/>
              </div>
              
            
            )
}

export default HomePage