import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [initialX, setInitialX] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);
  const [arrLength, setArrLength] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const x = JSON.parse(localStorage.getItem("cartItem"));
  const [cartItemCnt, setCartItemCnt] = useState(0);
  const [data, setData] = useState(x ? x : []);
  const baseURL = "http://interviewapi.ngminds.com";
  const [products, setProducts] = useState([]);
  const [sortProduct, setSortProduct] = useState("default");
  const [perPage, setPerPage] = useState(5);
  const [active, setActive] = useState(1);

  useEffect(() => {
    axios.get("http://interviewapi.ngminds.com/api/getAllProducts").then(
      (response) => {
        setProducts(response.data.products);
        setIsLoading(true);
      },
      (error) => {}
    );
  }, []);
  console.log(products);
  const arr = [x];
  console.log(data);
  const add2Cart = (id) => {
    setData([...data, id]);
  };
  // useEffect(() => {
  //  setProdData(products)
  //  setIsLoading(true)
  // }, []);
  //console.log(pageCount);
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(data));
    const temp = JSON.parse(localStorage.getItem("cartItem"));
    // console.log(temp);

    const newArray = [
      ...new Set(
        temp &&
          temp.filter((value, index, self) => self.indexOf(value) !== index)
      ),
    ];
    var newArr = data.filter(function (elem, pos) {
      return temp.indexOf(elem) == pos;
    });
    console.log(temp);
    console.log(newArr);
    setCartItemCnt(newArr.length);
  }, [data]);
  localStorage.setItem("cartCount", cartItemCnt);

  useEffect(() => {
    console.log(sortProduct);
    if (sortProduct == "default") {
      axios.get("http://interviewapi.ngminds.com/api/getAllProducts").then(
        (response) => {
          setProducts(response.data.products);
          setIsLoading(true);
          setArrLength(response.data.products.length);
          setInitialX(1);
        },
        (error) => {}
      );
      console.log();
    } else if (sortProduct == "Low to High") {
      const updatedProd =
        products &&
        products.sort((a, b) =>
          parseInt(a.price) > parseInt(b.price) ? 1 : -1
        );
      setProducts([...updatedProd]);
      setInitialX(1);
    } else if (sortProduct == "High to Low") {
      const updatedProd =
        products &&
        products.sort((a, b) =>
          parseInt(a.price) < parseInt(b.price) ? 1 : -1
        );
      setProducts([...updatedProd]);
      setInitialX(1);
    }
  }, [sortProduct]);

  const changeX = (no) => {
    setInitialX(no);
  };

  let endIndex = initialX * perPage;
  const startIndex = endIndex - perPage;
  //console.log(pageCount);
  // console.log(endIndex);
  const handlePageClick = (e) => {};

  const prevPage = () => {
    if (initialX > 1) {
      setInitialX(initialX - 1);
      setActive(initialX-1)

    }
  };
  const nextPage = () => {
    // console.log(initialX);
    // console.log(pageCount);
    if (initialX < pageCount) {
      setInitialX(initialX + 1);
      setActive(initialX+1)
    }
  };
  return (
    <div>
      <div class="container">
        <h1>
          <a href="/">My Ecommerce Site</a>
          <span class="pull-right">
            <Link to="/cart">
              <button>Cart {`(${cartItemCnt})`}</button>
            </Link>
          </span>
        </h1>
        <hr />
        <div class="row">
          <div class="col-sm-12">
            <div style={{ margin: "25px 0;" }}>
              <label for="" class="control-label">
                Sort by:
              </label>
              <select
                name=""
                id=""
                onChange={(e) => setSortProduct(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          {products &&
            products.slice(startIndex, endIndex).map((index, val) => {
              return (
                <>
                  <div class="col-md-3">
                    <div
                      class="bg-info"
                      style={{
                        backgroundColor:
                          val == 0
                            ? "#d9edf7"
                            : val % 4 === 0
                            ? "#d9edf7"
                            : val % 2 === 0
                            ? "#fcf8e3"
                            : val - 1 == 0
                            ? "#dff0d8"
                            : (val - 1) % 4 == 0
                            ? "#dff0d8"
                            : (val - 1) % 2 === 0
                            ? "#f2dede"
                            : "",
                      }}
                    >
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

                      <button
                        class="btn btn-warning"
                        onClick={() => add2Cart(index._id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <hr />
                    {/* {(val + 1) % 4 === 0 ? "done" : "not"} */}
                  </div>
                </>
              );
            })}
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-8">
            <Pagination
              currentPage={initialX}
              entriesPerPage={perPage}
              prevPage={prevPage}
              nextPage={nextPage}
              setPageCount={setPageCount}
              handlePageClick={handlePageClick}
              arrLength={arrLength}
              changeX={changeX}
              active={active}
              setActive={setActive}
            />
          </div>
          <div class="col-sm-4 text-right">
            <div style={{ margin: "25px 0" }}>
              <label for="" class="control-label">
                Items Per Page:
              </label>
              <select
                name=""
                id=""
                onChange={(e) => setPerPage(e.target.value)}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
