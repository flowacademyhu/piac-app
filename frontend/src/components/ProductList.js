import React from 'react';

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <div key={product} className="Product-Item">
      {product}
    </div>
  ));
  return <div className="Product-List">{productList}</div>;
};
export default ProductList;
