import React, { useEffect, useState } from 'react';
import { kids } from '../../../Services/UserApi';
import ProductCard from './ProductCard';

function Kids() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const data = await kids();
          console.log('Fetched data:', data);
  
          if (Array.isArray(data)) {
            setProducts(data);
          } else {
            console.error('Data format error: Expected an array, but got:', data);
            throw new Error('Data format error: Expected an array');
          }
        } catch (error) {
          setError('Failed to fetch products. Please try again later.');
          console.error('Error fetching products:', error);
        }
      };
      
      fetchProducts();
    }, []);

  return (
    <div className="shop">
    {error ? (
      <div className="error-message">{error}</div>
    ) : (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    )}
  </div>
  );
}

export default Kids
