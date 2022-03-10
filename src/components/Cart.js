import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Cart({ products }) {
  const [quantity, setQuantity] = useState(0);
  const ar = [];
  const data = localStorage.getItem("cartItem");
  const baseURL = "http://interviewapi.ngminds.com";
  const [tot, setTotal] = useState(0);
  //console.log(data);
  const a = data.split(",");
  a.shift();

  const setValues = (e, price) => {
    console.log(price);
    setQuantity(e.target.value);
    let total = tot + price * quantity;
    setTotal(total);
  };
  for (let i = 0; i < a.length; i++) {
    ar.push(2);
    // setQuantity([...quantity, 2]);
  }
  //   useEffect(() => {
  //     setQuantity(ar);
  //   }, []);
  console.log(quantity);
  //   const incrementCnt = (val) => {
  //     setQuantity([...quantity]);
  //   };
  return (
    <div>
      <div class="container">
        <div class="row">
          <h1>
            <a href="/">My Ecommerce Site</a>

            <span class="pull-right">
              <a href="cart.html">Cart (0)</a>
            </span>
          </h1>
          <hr />
          <div class="col-md-12">
            <div class="panel panel-default">
              <div class="panel-heading">MY CART (1)</div>
              <div class="panel-body">
                <form>
                  {a &&
                    a.map((index, val) => {
                      return (
                        <div class="row">
                          {products.products &&
                            products.products.map((i, v) => {
                              return (
                                <>
                                  {i._id == index ? (
                                    <>
                                      <div class="col-md-3">
                                        <img
                                          src={`${baseURL}/${i.image}`}
                                          width="100px"
                                          height="200px"
                                        />
                                      </div>
                                      <div class="col-md-3">
                                        {i.name}
                                        <br />
                                        <i class="fa fa-inr"></i>
                                        {i.price}
                                      </div>

                                      <div class="col-md-3">
                                        quantity
                                        <br />
                                        <input
                                          type="number"
                                          name="quantity"
                                          //   onClick={(e) =>
                                          //     setQuantity(e.target.value)
                                          //   }
                                          onClick={(e) => setValues(e, i.price)}
                                          class="qty"
                                          id={val}
                                          size="5px"
                                        />
                                      </div>
                                      {/* {setTotal(tot + quantity * i.price)} */}
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </>
                              );
                            })}

                          <div class="col-md-3">
                            <a href="cart.html" class="btn btn-warning">
                              remove
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </form>
                <hr />
                <div class="row">
                  <div class="col-md-9">
                    <label class="pull-right">Amount Payable</label>
                  </div>
                  <div class="col-md-3 ">{tot}</div>
                </div>
              </div>

              <div class="panel-footer">
                <Link to="/home">
                  <a href="index.html" class="btn btn-success">
                    Continue Shopping
                  </a>
                </Link>
                <Link to="/place-order">
                  <a href="placeOrder.html" class="pull-right btn btn-danger">
                    Place Order
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
