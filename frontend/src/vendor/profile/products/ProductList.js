import React from "react";
import tag_Icon from "./tag.svg";
import styled from "styled-components";

const ProductItem = styled.div`
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  padding-right: 20px;
`;

const ProductList = ({ products }) => {
  const productList = products
    ? products.map((product, index) => (
        <ProductItem key={index}>
          <img className="product-tag" src={tag_Icon} alt="tag" />
          {product}
        </ProductItem>
      ))
    : [];
  return <div className="product-list">{productList}</div>;
};
export default ProductList;
