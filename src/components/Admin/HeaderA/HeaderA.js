import React from 'react'
import './HeaderA.css'
import { Link } from 'react-router-dom'
function HeaderA() {
//  const handleLogout = () => {
//    const navigate = useNavigate();
//  }
  return (
   <div className='Header'>
              <div className='headerbrand'>
                  
                <img className='pic'
                 src="https://down-my.img.susercontent.com/file/my-11134207-7qul7-lj5c38hjp5qe3a"
                 alt="" height="110px" width="150"/>
              <p className='clr'>STYLE SAVVY</p>
              </div>
              <div className='headerlinks'>
                 <Link  to='/admin'>Home</Link>
                 <Link  to='/admin/userdata'>UserData</Link>
                 <Link  to='/admin/product'>ProductList</Link>
                 <Link  to='/admin/order'>OrdrerList</Link>
             </div>
              <div className='hearderbuttons'>
              
              <Link to='/logout'><button >LogOut</button></Link>
             </div></div>
  )
}

export default HeaderA



// import React from 'react'
// import './HeaderA.css'
// import { Link } from 'react-router-dom';
// function HeaderA {
//    return (
//       <div className='Header'>
//           <div className='headerbrand'>
//               <h1></h1>
//               <img className='pic'
//               src="https://down-my.img.susercontent.com/file/my-11134207-7qul7-lj5c38hjp5qe3a"
//               alt="" height="110px" width="150"/>
//            <p className='clr'>STYLE SAVVY</p>
//            </div>
//            <div className='headerlinks'>
//               <Link  to='/admin'>Home</Link>
//               <Link  to='/admin/userdata'>UserData</Link>
//               <Link  to='/admin/product'>ProductList</Link>
//               <Link  to='/admin/order'>OrdrerList</Link>
//           </div>
//            <div className='hearderbuttons'>
//            <Link to='/login'><button>Login</button></Link>
//           <button>LogOut</button>
//           </div></div>
//   )
// }

// export default HeaderA