import React from "react";
import tag_Icon from "./tag.svg";
import styled from "styled-components";

const ProductItem = styled.div`
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  padding-right: 20px;
`;

const ProductTag = styled.img`
  padding-right: 4px;
`;

const ProductListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductList = ({ products }) => {
  const productList = products
    ? products.map((product, index) => (
        <ProductItem key={index}>
          <ProductTag src={tag_Icon} alt="tag" />
          {product}
        </ProductItem>
      ))
    : [];
  return <ProductListStyled>{productList}</ProductListStyled>;
};
export default ProductList;
