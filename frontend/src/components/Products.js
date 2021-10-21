import React from 'react';
import ProductList from './ProductList';
import './Products.css';
import { Container, Row, Col } from 'react-bootstrap';

const Products = ({ products }) => {
  return (
    <div className="Product">
      <Container className="Product-Content">
        <div className="Product-Title">Termékek</div>
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
