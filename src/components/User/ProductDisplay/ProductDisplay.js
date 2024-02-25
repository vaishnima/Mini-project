import React from 'react'
import './ProductDisplay.css'
function ProductDisplay() {
  return (
    <div><div class="product-container">
    <div class="product">
      <img src="product1.jpg" alt="Product 1" />
      <h3>Dress</h3>
      <p>Price: $50</p>
      <button>Add to Cart</button>
    </div>
    <div class="product">
      <img src="product2.jpg" alt="Product 2" />
      <h3>Shoes</h3>
      <p>Price: $80</p>
      <button>Add to Cart</button>
    </div>
    <div class="product">
      <img src="product3.jpg" alt="Product 3" />
      <h3>Handbag</h3>
      <p>Price: $60</p>
      <button>Add to Cart</button>
    </div>
  </div></div>
  )
}

export default ProductDisplay