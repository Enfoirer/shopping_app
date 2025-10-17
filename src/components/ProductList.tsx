import React from 'react';
import { Product } from '../types/Product';

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductClick, onAddToCart }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-container" onClick={() => onProductClick(product)}>
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-overlay">
              <span>View Details</span>
            </div>
          </div>
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <div className="product-price-row">
              <span className="product-price">${product.price.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <span className="product-discount">-{product.discountPercentage}%</span>
              )}
            </div>
            <button 
              className="add-to-cart-btn"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
