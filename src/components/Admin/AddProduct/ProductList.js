import React from 'react'
import { Link } from 'react-router-dom'
function ProductList() {
  return (
    <div className='udt'><h1 className='ahm'>Product List</h1>
    <h3 className='ult'>Product Data</h3>
    <table className='userlisttable'>
  <tr>
  <th>Items</th>
  <th>Title</th>
  <th>Product</th>
  <th>Description</th>
  <th>Price</th>
  <th>Action</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Frock</td>
    <td><img src='' alt='product1' /></td>
    <td>vaishnima@gmail.com</td>
    <td>$599</td>
    <td className='blk'><Link to='/block'><button>Block</button></Link></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Saari</td>
    <td><img src='' alt='product1' /></td>
    <td>vaishnima@gmail.com</td>
    <td>$2999</td>
    <td className='blk'><Link to='/block'><button>Block</button></Link></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Shirt and Pant</td>
    <td><img src='' alt='product1' /></td>
    <td>vaishnima@gmail.com</td>
    <td>$1699</td>
    <td className='blk'><Link to='/block'><button>Block</button></Link></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Kurta</td>
    <td><img src='' alt='product1' /></td>
    <td>vaishnima@gmail.com</td>
    <td>$999</td>
    <td className='blk'><Link to='/block'><button>Block</button></Link></td>
  </tr>
 </table>
        </div>
  )
}

export default ProductList
        
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
   