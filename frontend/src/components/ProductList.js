import React from "react";
import tag_Icon from "../icons/tag.svg";

const ProductList = ({ products }) => {
  const productList = products
    ? products.map((product, index) => (
        <div key={index} className="product-item">
          <img className="product-tag" src={tag_Icon} alt="tag" />
          {product}
        </div>
      ))
    : [];
  return <div className="product-list">{productList}</div>;
};
export default ProductList;
