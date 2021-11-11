import React from "react";
import ProductList from "./ProductList";
import "../styles/Products.css";

const Products = ({ products }) => {
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-title">Mit tudsz venni nálam?</div>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;
