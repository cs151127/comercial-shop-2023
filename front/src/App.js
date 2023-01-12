import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginScreen from "./components/screens/LoginScreen";
import { Container } from "react-bootstrap";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/ProductScreen";
import React, { Component } from 'react';
import CartScreen from "./components/screens/CartScreen";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterScreen from "./components/screens/RegisterScreen";
class App extends Component {
render() {
	return (
		<BrowserRouter>
		<Header />
		<main className="py-3">
		  <Container>
			<Routes>
			  {" "}
			  <Route path="/" element={<HomeScreen />}exact />
			  <Route path="/product/:id" element={<ProductScreen />} />
			  <Route path="/login" element={<LoginScreen />} />
			  <Route path="/register" element={<RegisterScreen />} />
			  <Route path="/cart/:id?" element={<CartScreen />} />
			  
			  
			</Routes>
		  </Container>
		</main>
		<Footer />
	  </BrowserRouter>
);
}
}

export default App;

