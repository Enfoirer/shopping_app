import React, { useState } from 'react';
import { Product } from '../types/Product';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="product-details-overlay" onClick={onClose}>
      <div className="product-details-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="product-details-content">
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.images[selectedImage] || product.thumbnail} 
                alt={product.title} 
              />
            </div>
            {product.images.length > 1 && (
              <div className="image-thumbnails">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    className={selectedImage === index ? 'active' : ''}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="product-details-info">
            <h2>{product.title}</h2>
            <p className="product-brand">Brand: {product.brand}</p>
            <p className="product-category">Category: {product.category}</p>
            
            <div className="product-rating">
              <span className="stars">★★★★★</span>
              <span className="rating-value">{product.rating}/5</span>
            </div>
            
            <div className="price-section">
              <span className="detail-price">${product.price.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <span className="detail-discount">Save {product.discountPercentage}%</span>
              )}
            </div>
            
            <p className="product-description">{product.description}</p>
            
            <div className="stock-info">
              <span className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </span>
            </div>
            
            <button 
              className="detail-add-to-cart"
              onClick={() => onAddToCart(product)}
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
