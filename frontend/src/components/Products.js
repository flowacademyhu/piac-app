import React from 'react';
import ProductList from './ProductList';
import './Products.css';

const Products = ({ products }) => {
  return (
    <div className='product'>
      <Container className='product-content'>
        <div className='product-title'>Termékek</div>
        <Row>
          <Col>
            <ProductList products={products} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
