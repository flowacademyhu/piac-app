import React from "react";
import ProductList from "./ProductList";
import "./Products.css";
import styled from "styled-components";

const Product = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const Products = ({ products }) => {
  return (
    <Product>
      <div className="product-content">
        <div className="product-title">Mit tudsz venni nálam?</div>
        <ProductList products={products} />
      </div>
    </Product>
  );
};

export default Products;
