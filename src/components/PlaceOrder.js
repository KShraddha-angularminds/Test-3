import axios from "axios";
import React, { useEffect, useState } from "react";

function PlaceOrder({ products }) {
  const data = localStorage.getItem("cartItem");
  const [test1, setTest1] = useState([]);
  let test = [];
  const [postData, setPostData] = useState({
    personName: "",
    deliveryAddress: "",
    productsOrdered: test,
    orderTotal: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const tempArr = [];
  const cartCount = JSON.parse(localStorage.getItem("cartCount"));
  const finalProducts = JSON.parse(localStorage.getItem("products"));
  const finalquantity = JSON.parse(localStorage.getItem("quantity"));
  let totQuantity = 0;
  let subTotal = 0;
  for (let num of finalquantity) {
    totQuantity = totQuantity + num;
  }
  const [prod, setProd] = useState([
    {
      productID: "",
      qty: 0,
      price: 0,
      total: 0,
    },
  ]);
  // test.push({ key: 1, value: 2 });
  // console.log(test);
  useEffect(() => {
    //setPostData({ ...postData, productsOrdered: product });
    // const d =
    //   products.products &&
    //   products.products.map((val, index) => {
    //     return (
    //       <>
    //         {finalProducts &&
    //           finalProducts.map((v, i) => {
    //             return (
    //               <>{val._id === v ? test.push(...{ key: 1, value: 2 }) : ""}</>
    //             );
    //           })}
    //       </>
    //     );
    //   });
    // console.log(d);
  }, []);
  // console.log(d);
  // setPostData({
  //   ...postData,
  //   productsOrdered: [
  //     {
  //       ...product,
  //       productID: val._id,
  //       qty: finalquantity[i],
  //       price: val.price,
  //       total: finalquantity[i] * val.price,
  //     },
  //   ],
  // })

  // useEffect(() => {
  //   products.products &&
  //     products.products.map((val, index) => {
  //       return (
  //         <>
  //           {finalProducts &&
  //             finalProducts.map((v, i) => {
  //               return (
  //                 <>
  //                   {val._id === v
  //                     ? test.push({
  //                         productID: val._id,
  //                         qty: finalquantity[i],
  //                         price: val.price,
  //                         total: finalquantity[i] * val.price,
  //                       })
  //                     : ""}
  //                 </>
  //               );
  //             })}
  //         </>
  //       );
  //     });
  //   setProd(test);
  // }, []);
  // useEffect(() => {
  //   setPostData({ ...postData, productsOrdered: prod });
  // }, [prod]);

  console.log(tempArr);

  const handlePlaceOrder = (sub) => {
    console.log(test);
    // setPostData({ ...postData, orderTotal: sub });
    // setPostData({ ...postData, orderTotal: sub });
    // axios
    //   .post("http://interviewapi.ngminds.com/api/placeOrder", setPostData)
    //   .then((response) => console.log("success"));
  };
  console.log(test);

  return (
    <div>
      <div class="container">
        <div class="row">
          <h1>
            <a href="/">My Ecommerce Site</a>

            <span class="pull-right">
              <a href="cart.html">Cart {`(${cartCount})`}</a>
            </span>
          </h1>
          <hr />
          <div class="col-md-12">
            <div class="panel panel-default">
              <div class="panel-heading">Place Order</div>
              <div class="panel-body">
                <form class="form-horizontal" role="form">
                  <table class="table table-striped">
                    <thead class="table-head">
                      <tr>
                        <td>Product Name</td>
                        <td> Quntity</td>
                        <td> SubTotal</td>
                      </tr>
                    </thead>
                    <tbody>
                      {products.products &&
                        products.products.map((val, index) => {
                          return (
                            <>
                              {finalProducts &&
                                finalProducts.map((v, i) => {
                                  if (val._id === v) {
                                    test.push({
                                      productID: val._id,
                                      qty: finalquantity[i],
                                      price: val.price,
                                      total: finalquantity[i] * val.price,
                                    });
                                  }

                                  return (
                                    <>
                                      {val._id == v ? (
                                        <tr>
                                          <td>{val.name}</td>

                                          <td>{finalquantity[i]}</td>
                                          <td>
                                            <i class="fa fa-inr"></i>
                                            {finalquantity[i] *
                                              parseInt(val.price)}
                                            <p style={{ display: "none" }}>
                                              {tempArr.push(
                                                finalquantity[i] *
                                                  parseInt(val.price)
                                              )}
                                            </p>
                                            {/* {console.log(tempArr)} */}
                                          </td>
                                        </tr>
                                      ) : (
                                        ""
                                      )}
                                    </>
                                  );
                                })}
                            </>
                          );
                        })}
                      <tr>
                        <td>
                          <strong>Total</strong>
                        </td>
                        <td>
                          <strong> {totQuantity}</strong>
                        </td>
                        <td>
                          <strong>
                            <i class="fa fa-inr"></i>
                            {tempArr.map((v, index) => {
                              subTotal = subTotal + v;
                            })}
                            {subTotal}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />

                  <br />
                  <div class="form-group">
                    <label for="inputName3" class="col-sm-2 control-label">
                      Enter Order Details
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="inputName3" class="col-sm-2 control-label">
                      Name
                    </label>
                    <div class="col-sm-6">
                      <input
                        class="form-control"
                        id="inputName3"
                        placeholder="Name"
                        name="personName"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">
                      Address
                    </label>
                    <div class="col-sm-6">
                      <textarea
                        class="form-control"
                        id="inputEmail3"
                        placeholder="Deliver Address"
                        name="deliveryAddress"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label"></label>
                    <div class="col-sm-6">
                      <button
                        type="button"
                        onClick={() => handlePlaceOrder(subTotal)}
                        href=""
                        class="btn btn-warning"
                      >
                        Confirm Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
