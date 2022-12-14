import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Detail from "./components/Detail";
import ProductScreen from "./screens/ProductScreen";
import axios from 'axios'
import { useTranslation } from "react-i18next";



const styles = {
  card: {
    borderRadius: 55,
    padding: "3rem",
    width: "20vw",
    height: "20vh",
  },
  cardImage: {
    objectFit: "cover",
    borderRadius: 55,
  },
};

const handleMakeOutboundCall = event => {
}

function App() {


  const {t} = useTranslation(["app-translation"])
  return (
    <Router>
      
      <Header />
      <main className="py-3">
        <Container>
          <Row>
            <Col sm={8}>
              <a href={`/product/`}>
                {/* customize here */}
                <Card.Img
                  src={"/images/customer_logo.png"}
                  variant="top"
                  style={styles.card}
                ></Card.Img>
              </a>
              <a href={"/images/nestle/nestle-logo.png"}></a>

              <Route path="/" component={HomeScreen} exact />
              <Route path="/product/:id" component={ProductScreen} />
            </Col>

            <Col className="py-6">
              {/* customize here */}
              <h1 className="mt-6">Chat</h1>
              
              <p> {t("app-translation:tryourservice")}</p>
              <Button onClick={e=>handleMakeOutboundCall(e)}>{t("app-translation:wecallyou")}</Button>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default function WrapperApp() {
  return(
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  )
}
