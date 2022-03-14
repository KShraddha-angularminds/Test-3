import logo from "./logo.svg";
import "./App.css";
import "./components/styles.css";
import Index from "./components/Home";
import React, { useState, useEffect } from "react";
import Cart from "./components/Cart";
import PlaceOrder from "./components/PlaceOrder";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
function App() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get("http://interviewapi.ngminds.com/api/getAllProducts").then(
      (response) => {
        setProducts(response.data);
      },
      (error) => {}
    );
  }, []);
  // localStorage.setItem("APIdata", JSON.stringify(products.products));
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* element={<Navigate to={<Index />} /> */}
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart products={products} />} />
          <Route
            path="/place-order"
            element={<PlaceOrder products={products} />}
          />
        </Routes>
      </Router>

      {/* <Cart /> */}
      {/* <PlaceOrder /> */}
    </div>
  );
}

export default App;
