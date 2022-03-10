import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Index({ products }) {
  const navigate = useNavigate();
  const x = localStorage.getItem("cartItem");

  const baseURL = "http://interviewapi.ngminds.com";
  const arr = [x];

  const add2Cart = (id) => {
    arr.push(id);
    localStorage.setItem("cartItem", arr);
    navigate("/cart");
  };

  return (
    <div>
      <div class="container">
        <h1>
          <a href="/">My Ecommerce Site</a>
          <span class="pull-right">
            <a href="cart.html">Cart (0)</a>
          </span>
        </h1>
        {/* <h1>{prodArr}</h1> */}
        <hr />
        <div class="row">
          {products.products &&
            products.products.map((index, val) => {
              return (
                <>
                  <div class="col-md-3">
                    <div class="bg-info">
                      <img
                        src={`${baseURL}/${index.image}`}
                        width="100"
                        height="200"
                      />
                      <br />
                      <br />
                      <p>{index.name}</p>
                      <p>
                        <i class="fa fa-inr"></i>
                        {index.price}
                      </p>
                      {/* <Link to="/cart"> */}
                      <button
                        class="btn btn-warning"
                        onClick={() => add2Cart(index._id)}
                      >
                        Add to Cart
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </>
              );
            })}

          {/* <div class="row">
          <div class="col-md-3">
            <div class="bg-info">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div> */}
          {/* <div class="col-md-3">
            <div class="bg-success">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bg-warning">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bg-danger">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-3">
            <div class="bg-info">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bg-success">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bg-warning">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bg-danger">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-3">
            <div class="bg-info">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bg-success">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bg-warning">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="bg-danger">
              <img src="images/5.jpeg" width="100" height="200" />
              <br />
              <br />
              <p>H2O Sb104 Stainless Steel Sports</p>
              <p>
                <i class="fa fa-inr"></i>200
              </p>
              <a href="cart.html" class="btn btn-warning">
                Add to Cart
              </a>
            </div> 
          </div>*/}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Index;
