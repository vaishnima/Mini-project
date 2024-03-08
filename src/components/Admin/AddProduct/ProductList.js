import React, { useState } from 'react'

import './ProductList.css'
import { Link } from 'react-router-dom';

function ProductList() {
  const [link,setLink] = useState("shop");
  return (
    <div className='Head'>
      <p className='clr'>STYLE SAVVY</p>
      <div>
            <ul className='headerlinks'>
            <li onClick={()=>(setLink("shop"))}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{link==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>(setLink("mens"))}><Link style={{ textDecoration: 'none'}} to='/mens'>Mens</Link>{link==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>(setLink("womens"))}><Link style={{ textDecoration: 'none'}} to='/womens'>Womens</Link>{link==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>(setLink("kids"))}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{link==="kids"?<hr/>:<></>}</li></ul>
        </div>
        
    {/* // <div className='row'>
    // <div className='product-card'>
    //   <div className='product-img'>
    //     <img src='https://images.bestsellerclothing.in/data/vero-moda/28-09-2022/239718401_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2' alt='' width='50%'/>
    //   </div>
    //   <div class='product-info'>
    //     <div className='product-description'>Pink floral print top</div>
    //     <div className='product-price'>₹1399</div>
    //     <button className='product-button'>Add to cart</button>
    //     </div>
    //     <div className='product-img'>
    //     <img src='https://images.bestsellerclothing.in/data/vero-moda/08-jan-2024/120722001_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2' alt='' width='50%'/>
    //     </div>
    //   <div class='product-info'>
    //     <div className='product-description'>Black Floral Embroidered TOP</div>
    //     <div className='product-price'>₹3449</div>
    //     <button className='product-button'>Add to cart</button>
    //   </div>
    //   <div className='product-img'>
    //   <img src='https://images.bestsellerclothing.in/image/data/vero-moda/29-dec-2022/262816101_g1.jpg?width=397&height=526&mode=fill&fill=blur&format=auto' alt='' width='50%'/>
    //   </div>
    //   <div class='product-info'>
    //     <div className='product-description'>Pink Plisse Halter Neck Top</div>
    //     <div className='product-price'>₹2000</div>
    //     <button className='product-button'>Add to cart</button>
    //   </div>
    //   <div className='product-img'>
    //   <img src='https://images.bestsellerclothing.in/data/vero-moda/03-feb-2024/177441001_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2' alt='' width='50%'/>
    //   </div>
    //   <div class='product-info'>
    //     <div className='product-description'>Pink floral print top</div>
    //     <div className='product-price'>₹1399</div>
    //     <button className='product-button'>Add to cart</button>
    //   </div>
    //   <div className='product-img'>
    //   <img src='' alt='' width='50%'/>
    //   </div>
    //   <div class='product-info'>
    //     <div className='product-description'>Pink floral print top</div>
    //     <div className='product-price'>₹1399</div>
    //     <button className='product-button'>Add to cart</button>
    //   </div>
    //   <div className='product-img'>
    //   <img src='' alt='' width='50%'/>
    //   </div>
    //   <div class='product-info'>
    //     <div className='product-description'>Pink floral print top</div>
    //     <div className='product-price'>₹1399</div>
    //     <button className='product-button'>Add to cart</button>
    //   </div>
    //   <div className='product-img'>
    //   <img src='' alt='' width='50%'/>
    //   </div>
    //   <div class='product-info'>
    //     <div className='product-description'>Pink floral print top</div>
    //     <div className='product-price'>₹1399</div>
    //     <button className='product-button'>Add to cart</button>
    //   </div>
    //   <div className='product-img'>
    //   <img src='' alt='' width='50%'/>
    //   </div>
    //   <div class='product-info'>
    //     <div className='product-description'>Pink floral print top</div>
    //     <div className='product-price'>₹1399</div>
    //     <button className='product-button'>Add to cart</button>
    //   </div>
    // </div>
    // </div>
    </div> */}
    </div>
  )
}

export default ProductList