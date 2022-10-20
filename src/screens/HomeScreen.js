import React from "react";
import products from "../products";
// import productsNestle from '../productsNestle'
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const productsLocalized = products.filter(p=>p.lang === localStorage.getItem('i18nextLng'))
  console.log(productsLocalized)
  return (
    <>
      <h1>Top Destinacions</h1>
      <Row>
        {productsLocalized.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
            {/* <h3>{product.name}</h3> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
