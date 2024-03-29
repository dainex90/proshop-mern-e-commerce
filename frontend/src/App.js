import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <Routes>
            <Route path='/' Component={HomeScreen} exact />
            <Route path='/product/:id' Component={ProductScreen} />
            <Route path='/product/:id/cart' Component={CartScreen} />
          </Routes>
         
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
