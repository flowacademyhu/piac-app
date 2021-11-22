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

const ProductItem = styled.div`
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  padding-right: 20px;
`;

const Products = ({ products }) => {
  return (
    <Product>
      <ProductContent>
        <ProductItem>Mit tudsz venni nálam?</ProductItem>
        <ProductList products={products} />
      </ProductContent>
    </Product>
  );
};

export default Products;
