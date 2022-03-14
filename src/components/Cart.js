import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Cart({ products }) {
  const [quantity, setQuantity] = useState(0);
  
  const d = JSON.parse(localStorage.getItem("cartItem"));
  const cartCount = JSON.parse(localStorage.getItem("cartCount"));
  const [data, setData] = useState(d);
  const [cartICnt, setCartICnt] = useState(cartCount);
  const baseURL = "http://interviewapi.ngminds.com";
  const [tot, setTotal] = useState(0);
  const [isupdate, setIsUpdate] = useState(false);
  const [Storage, setstorage] = useState([]);
  var newData = data.filter(function (elem, pos) {
    return data.indexOf(elem) == pos;
  });
  const counts = {};
  data.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

 
const ar=Object.values(counts);

  console.log(ar)
  const [noOfProd, setNoOfProd] = useState(ar);
console.log(noOfProd)
  // const setValues = (e, price) => {
  //   console.log(price);
  //   setQuantity(e.target.value);
  //   let total = tot + price * quantity;
  //   setTotal(total);
  // };
  console.log(quantity);

  console.log(Storage);
  const removeProduct = (i) => {
    console.log(i);
    data &&
      data.map((index) => {
        console.log(data.indexOf(i));
        return index == i ? data.splice(data.indexOf(i), 1) : "";
      });

    localStorage.setItem("cartItem", JSON.stringify(data));

    setCartICnt(cartICnt - 1);
    setIsUpdate(!isupdate);
  };
  const incrementCnt = (i) => {
    setNoOfProd((prev) => prev.map((val, j) => (i === j ? prev[i] + 1 : val)));
  };

  const decrementCnt = (i) => {
    setNoOfProd((prev) => prev.map((val, j) => (i === j ? prev[i] - 1 : val)));
  };

  useEffect(() => {
    console.log(newData);
    
    products.products &&
      products.products.map((val, index) => {
        newData.map((v, i) => {
          return newData[i] == val._id
            ? setTotal((prev) => prev + val.price * noOfProd[i])
            : "";
        });
      });
  }, [noOfProd, products,isupdate]);

  localStorage.setItem("products", JSON.stringify(newData));
  localStorage.setItem("quantity", JSON.stringify(noOfProd));

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>
            <a href="/">My Ecommerce Site</a>

            <span className="pull-right">
              <a href="cart.html">Cart {`(${cartICnt})`}</a>
            </span>
          </h1>
          <hr />
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">MY CART (1)</div>
              <div className="panel-body">
                <form>
                  {newData &&
                    newData.map((index, val) => {
                      return (
                        <div className="row">
                          {products.products &&
                            products.products.map((i, v) => {
                              return (
                                <>
                                  {i._id == index ? (
                                    <>
                                      <div className="col-md-3">
                                        <img
                                          src={`${baseURL}/${i.image}`}
                                          width="100px"
                                          height="200px"
                                        />
                                      </div>
                                      <div className="col-md-3">
                                        {i.name}
                                        <br />
                                        <i className="fa fa-inr"></i>
                                        {i.price}
                                      </div>

                                      <div className="col-md-3">
                                        quantity
                                        <br />
                                        <button
                                          type="button"
                                          onClick={() => decrementCnt(val)}
                                          class="qtyminus"
                                          ng-disabled="qty<=0"
                                        >
                                          -
                                        </button>
                                        
                                        <input
                                          type="number"
                                          name="quantity"
                                          value={noOfProd[val]}
                                          // onClick={(e) => setValues(e, i.price)}
                                          className="qty"
                                          id={val}
                                          size="5px"
                                        />
                                        <button
                                          type="button"
                                          onClick={() => incrementCnt(val)}
                                        >
                                          +
                                        </button>
                                      </div>
                                      {/* {setTotal(tot + quantity * i.price)} */}
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </>
                              );
                            })}

                          <div className="col-md-3">
                            <button
                              type="button"
                              className="btn btn-warning"
                              onClick={() => removeProduct(index)}
                            >
                              remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </form>
                <hr />
                <div className="row">
                  <div className="col-md-9">
                    <label className="pull-right">Amount Payable</label>
                  </div>
                  <div className="col-md-3 ">{tot}</div>
                </div>
              </div>

              <div className="panel-footer">
                <Link to="/home">
                  <a href="index.html" className="btn btn-success">
                    Continue Shopping
                  </a>
                </Link>
                <Link to="/place-order">
                  <a
                    href="placeOrder.html"
                    className="pull-right btn btn-danger"
                  >
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
