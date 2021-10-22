import React from 'react';

const ProductList = ({ products }) => {
  const productList = products
    ? products.map((product) => (
        <div key={product} className="product-item">
          {product}
        </div>
      ))
    : [];
  return <div className="product-list">{productList}</div>;
};
export default ProductList;
