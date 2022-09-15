import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Detail from "./components/Detail";
import ProductScreen from "./screens/ProductScreen";
import axios from 'axios'
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
  event.preventDefault()
  axios.post(
    'https://aibufzstb2.execute-api.eu-central-1.amazonaws.com/prod/items', 
    {
      "phoneNumber":"+34699440094",
      "name":"Juan Estival",
      "emailAddress":"juaestiv@amazon.com"
    }
  ).then(res=>{
    console.log('Success making Outbound Call')
  })
}

function App() {
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
              <p> ¡Prueba nuestro servicio de chat personalizado!</p>
              <Button onClick={e=>handleMakeOutboundCall(e)}>¡ Te llamamos !</Button>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
