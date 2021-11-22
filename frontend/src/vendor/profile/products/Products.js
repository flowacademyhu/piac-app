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

const ProductContent = styled.div`
  color: #705a4f;
`;

const Products = ({ products }) => {
  return (
    <Product>
      <ProductContent>
        <div className="product-title">Mit tudsz venni nálam?</div>
        <ProductList products={products} />
      </ProductContent>
    </Product>
  );
};

export default Products;
