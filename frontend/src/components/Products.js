import React from 'react';
import ProductList from './ProductList';
import './Products.css';

const Products = ({ products }) => {
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-title">Termékek</div>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;
