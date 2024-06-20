// import React from 'react';
// import { Card, Button, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './ProductCard.css';

// function ProductCard({ product }) {
//   const navigate = useNavigate();


//   const handleImageClick = () => {
//     navigate(`/shop/${product._id}`);
//   };

//   return (
//     <Col xs={12} sm={6} md={4} lg={3} xl={3}> 
//       <Card className="product-card shadow p-3 mb-2">
//         <Card.Img 
//           style={{ height: '13rem', cursor:'pointer' }}
//           className='p-2'
//           variant="top" 
//           src={product.image} 
//           alt={product.name} 
//           // className="product-image" 
//           onClick={handleImageClick} 
//           // style={{ cursor: 'pointer' }} 
//         />
//         <Card.Body>
//           <Card.Title className="product-name">{product.name}</Card.Title>
//           <Card.Text className="product-description">{product.description}</Card.Text>
//           <Card.Text className="product-price">₹{product.price}</Card.Text>
//           <Button className="add-btn"variant="primary">Add to Cart</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// export default ProductCard;


// import React, { useState } from 'react';
// import { Card, Button, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaCartPlus, FaHeart } from 'react-icons/fa';
// import './ProductCard.css';

// function ProductCard({ product }) {
//   const navigate = useNavigate();
//   const [isInWishlist, setIsInWishlist] = useState(false);

//   const handleImageClick = () => {
//     navigate(`/shop/${product._id}`);
//   };

//   const handleToggleWishlist = () => {
//     setIsInWishlist(!isInWishlist);
//   };

//   const handleAddToCart = () => {
//     // Implement logic to add product to cart
//     console.log(`Added ${product.name} to cart`);
//   };

//   return (
//     <Col xs={12} sm={6} md={4} lg={3} xl={3}> 
//       <Card className="product-card shadow p-3 mb-2">
//         <Card.Img 
//           style={{ height: '13rem', cursor: 'pointer' }}
//           className='p-2'
//           variant="top" 
//           src={product.image} 
//           alt={product.name} 
//           onClick={handleImageClick} 
//         />
//         <Card.Body>
//           <Card.Title className="product-name">{product.name}</Card.Title>
//           <Card.Text className="product-description">{product.description}</Card.Text>
//           <Card.Text className="product-price">₹{product.price}</Card.Text>
//           <div className="d-flex justify-content-between align-items-center">
//             <Button className="add-btn mr-2" variant="primary" onClick={handleAddToCart}>
//               <FaCartPlus className="mr-1" />
//               Add to Cart
//             </Button>
//             <div 
//               className="wishlist-icon" 
//               onClick={handleToggleWishlist} 
//               style={{ color: isInWishlist ? 'red' : 'grey', cursor: 'pointer' }}
//             >
//               <FaHeart />
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// export default ProductCard;

// import React, { useState } from 'react';
// import { Card, Button, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaCartPlus, FaHeart } from 'react-icons/fa';

// import './ProductCard.css';

// function ProductCard({ product }) {
//   const navigate = useNavigate();
//   const [isInWishlist, setIsInWishlist] = useState(false);

//   const handleImageClick = () => {
//     navigate(`/shop/${product._id}`);
//   };

//   const handleToggleWishlist = () => {
//     setIsInWishlist(!isInWishlist);
//   };

//   const handleAddToCart = () => {
//     // Implement logic to add product to cart
//     console.log(`Added ${product.name} to cart`);
//   };

//   return (
//     <Col xs={12} sm={6} md={4} lg={3} xl={3}> 
//       <Card className="product-card shadow p-3 mb-2">
//         <div 
//           className="wishlist-icon" 
//           onClick={handleToggleWishlist} 
//           style={{ color: isInWishlist ? 'red' : 'black', cursor: 'pointer', textAlign: 'right', paddingRight: '10px' }}
//         >
//           <FaHeart />
//         </div>
//         <Card.Img 
//           style={{ height: '13rem',  cursor: 'pointer' }}
//           className='p-2'
//           variant="top" 
//           src={product.image} 
//           alt={product.name} 
//           onClick={handleImageClick} 
//         />
//         <Card.Body>
//           <Card.Title className="product-name">{product.name}</Card.Title>
//           <Card.Text className="product-description">{product.description}</Card.Text>
//           <Card.Text className="product-price">₹{product.price}</Card.Text>
//           <Button className="add-btn" variant="primary" onClick={handleAddToCart}>
//             <FaCartPlus className="mr-1" />
//             Add to Cart
//           </Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// export default ProductCard;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Card, Button, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaCartPlus, FaHeart } from 'react-icons/fa';
// import './ProductCard.css';

// function ProductCard({ product }) {
//   const navigate = useNavigate();
//   const [isInWishlist, setIsInWishlist] = useState(false);

//   const handleImageClick = () => {
//     navigate(`/shop/${product._id}`);
//   };

//   const handleToggleWishlist = () => {
//     setIsInWishlist(!isInWishlist);
//   };

//   const handleAddToCart = () => {
//     // Implement logic to add product to cart
//     console.log(`Added ${product.name} to cart`);
//   };

//   if (!product) {
//     return null; // or return some fallback UI
//   }

//   return (
//     <Col xs={12} sm={6} md={4} lg={3} xl={3}> 
//       <Card className="product-card shadow p-3 mb-2">
//         <div 
//           className="wishlist-icon" 
//           onClick={handleToggleWishlist} 
//           style={{ color: isInWishlist ? 'red' : 'grey', cursor: 'pointer', textAlign: 'right', paddingRight: '10px' }}
//         >
//           <FaHeart />
//         </div>
//         <Card.Img 
//           style={{ height: '13rem', cursor: 'pointer' }}
//           className='p-2'
//           variant="top" 
//           src={product.image} 
//           alt={product.name} 
//           onClick={handleImageClick} 
//         />
//         <Card.Body>
//           <Card.Title className="product-name">{product.name}</Card.Title>
//           <Card.Text className="product-description">{product.description}</Card.Text>
//           <Card.Text className="product-price">₹{product.price}</Card.Text>
//           <Button className="add-btn" variant="primary" onClick={handleAddToCart}>
//             <FaCartPlus className="mr-1" />
//             Add to Cart
//           </Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     image: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string,
//     price: PropTypes.number.isRequired,
//   }),
// };

// ProductCard.defaultProps = {
//   product: {
//     image: 'default-image-url.jpg',// Provide a default image URL or handle it in some way
    
//   },
// };

// export default ProductCard;


// ProductCard.js
// import React, { useState } from 'react';
// import { Card, Button, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaCartPlus, FaHeart } from 'react-icons/fa';
// import { useCart } from './CartContext'; // Import the useCart hook
// import './ProductCard.css';

// function ProductCard({ product }) {
//   const navigate = useNavigate();
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const { addToCart } = useCart(); // Get the addToCart function from the context

//   const handleImageClick = () => {
//     navigate(`/shop/${product._id}`);
//   };

//   const handleToggleWishlist = () => {
//     setIsInWishlist(!isInWishlist);
//   };

//   const handleAddToCart = () => {
//     addToCart(product); // Use the addToCart function to add the product to the cart
//     console.log(`Added ${product.name} to cart`);
//   };

//   return (
//     <Col xs={12} sm={6} md={4} lg={3} xl={3}> 
//       <Card className="product-card shadow p-3 mb-2">
//         <div 
//           className="wishlist-icon" 
//           onClick={handleToggleWishlist} 
//           style={{ color: isInWishlist ? 'red' : 'black', cursor: 'pointer', textAlign: 'right', paddingRight: '10px' }}
//         >
//           <FaHeart />
//         </div>
//         <Card.Img 
//           style={{ height: '13rem', cursor: 'pointer' }}
//           className='p-2'
//           variant="top" 
//           src={product.image} 
//           alt={product.name} 
//           onClick={handleImageClick} 
//         />
//         <Card.Body>
//           <Card.Title className="product-name">{product.name}</Card.Title>
//           <Card.Text className="product-description">{product.description}</Card.Text>
//           <Card.Text className="product-price">₹{product.price}</Card.Text>
//           <Button className="add-btn" variant="primary" onClick={handleAddToCart}>
//             <FaCartPlus className="mr-1" />
//             Add to Cart
//           </Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// export default ProductCard;


// import React, { useState } from 'react';
// import { Card, Button, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaCartPlus, FaHeart } from 'react-icons/fa';
// import { useCart } from './CartContext'; // Import the useCart hook
// import './ProductCard.css';

// function ProductCard({ product }) {
//   const navigate = useNavigate();
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const { addToCart } = useCart(); // Get the addToCart function from the context

//   const handleImageClick = () => {
//     navigate(`/shop/${product._id}`);
//   };

//   const handleToggleWishlist = () => {
//     setIsInWishlist(!isInWishlist);
//   };

//   const handleAddToCart = async () => {
//     try {
//       const response = await fetch('/cart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userId: 'yourUserId', productId: product._id }),
//       });
//       const data = await response.json();
//       if (data.status) {
//         addToCart(product); // Use the addToCart function to add the product to the cart
//         console.log(`Added ${product.name} to cart`);
//       } else {
//         console.error('Failed to add to cart:', data.message);
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   return (
//     <Col xs={12} sm={6} md={4} lg={3} xl={3}>
//       <Card className="product-card shadow p-3 mb-2">
//         <div
//           className="wishlist-icon"
//           onClick={handleToggleWishlist}
//           style={{ color: isInWishlist ? 'red' : 'black', cursor: 'pointer', textAlign: 'right', paddingRight: '10px' }}
//         >
//           <FaHeart />
//         </div>
//         <Card.Img
//           style={{ height: '13rem', cursor: 'pointer' }}
//           className='p-2'
//           variant="top"
//           src={product.image}
//           alt={product.name}
//           onClick={handleImageClick}
//         />
//         <Card.Body>
//           <Card.Title className="product-name">{product.name}</Card.Title>
//           <Card.Text className="product-description">{product.description}</Card.Text>
//           <Card.Text className="product-price">₹{product.price}</Card.Text>
//           <Button className="add-btn" variant="primary" onClick={handleAddToCart}>
//             <FaCartPlus className="mr-1" />
//             Add to Cart
//           </Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// export default ProductCard;


import React, { useEffect, useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { AddToWishlist, checkProductInWishlist } from '../../../Services/UserApi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const baseURL = "http://localhost:8000";
  const imageURL = `${baseURL}/shop/${product._id}`;
  const navigate = useNavigate();

  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const checkWishlistStatus = async () => {
      try {
        const response = await checkProductInWishlist(product._id);
        if (response.status === 200) {
          setInWishlist(response.data.inWishlist);
        }
      } catch (error) {
        console.error("Error checking wishlist status", error);
      }
    };

    checkWishlistStatus();
  }, [product._id]);

  const handleImageClick = () => {
    navigate(`/shop/${product._id}`);
  };

  const handleToggleWishlist = async () => {
    try {
      const productId = product._id;
      const response = await AddToWishlist(productId);

      if (response.status === 200) {
        toast.success("Product added to wishlist");
        setInWishlist(true);
      } else if (response.status === 201) {
        toast.success("Product removed from wishlist");
        setInWishlist(false);
      }
    } catch (error) {
      console.error("Error adding/removing product to wishlist", error);
    }
  };

  const handleAddToCart = () => {
    // Implement logic to add product to cart
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card className="product-card shadow p-3 mb-2">
        <div
          className="wishlist-icon"
          onClick={handleToggleWishlist}
          style={{ color: inWishlist ? 'red' : 'black', cursor: 'pointer', textAlign: 'right', paddingRight: '10px' }}
        >
          <FaHeart />
        </div>
        <Card.Img
          style={{ height: '13rem', cursor: 'pointer' }}
          className='p-2'
          variant="top"
          src={product.image}
          alt={product.name}
          onClick={handleImageClick}
        />
        <Card.Body>
          <Card.Title className="product-name">{product.name}</Card.Title>
          <Card.Text className="product-description">{product.description}</Card.Text>
          <Card.Text className="product-price">₹{product.price}</Card.Text>
          <Link to='/addcart'><Button className="add-btn" variant="primary" onClick={handleAddToCart}>
            <FaCartPlus className="mr-1" />
            Add to Cart
          </Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
