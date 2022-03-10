import logo from "./logo.svg";
import "./App.css";
import Index from "./components/Index";
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
function App() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get("http://interviewapi.ngminds.com/api/getAllProducts").then(
      (response) => {
        // var result = response.data;
        setProducts(response.data);
      },
      (error) => {
        // console.log(error);
      }
    );
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* element={<Navigate to={<Index />} /> */}
          {/* <Route path="/" element={ }/> */}
          <Route path="/home" element={<Index products={products} />} />
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
