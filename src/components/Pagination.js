import React, { useEffect, useState } from "react";

function Pagination({
  currentPage,
  entriesPerPage,
  prevPage,
  nextPage,
  arrLength,
  changeX,
  setPageCount,
}) {
  let arr = [];
  let property;
  const renderProducts = [];
  for (let i = 1; i <= Math.ceil(arrLength / entriesPerPage); i++) {
    renderProducts.push(i);
  }
  //  console.log(currentPage);
  const [active, setAsctive] = useState(0);
  const activePage = (no) => {
    property = document.getElementById(no);
    property.classList.add("active-page");
    console.log(document.getElementById(no));
    var all_pages = document.getElementsByClassName("pages");
    console.log(all_pages);
    for (let i = 0; i < all_pages.length; ++i) {
      if (
        all_pages[i].classList.contains("active-page") &&
        all_pages[i] != property
      ) {
        all_pages[i].classList.remove("active-page");
      } //end if
    }
    changeX(no);
  };

  useEffect(() => {
    console.log(renderProducts.length);
    setPageCount(renderProducts.length);
  });
  //console.log(renderProducts);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {
            <li className="page-item pages">
              <a className="page-link" onClick={prevPage}>
                Previous
              </a>
            </li>
          }
          {renderProducts &&
            renderProducts.map((no, i) => {
              return (
                <li className="page-item pages ">
                  <a a className="" id={no} onClick={() => activePage(no)}>
                    {no}
                  </a>
                </li>
              );
            })}

          {/* <li className="page-item">
            <a className="page-link" href="#">
              ...
            </a>
          </li> */}

          {
            <li className="page-item">
              <a className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          }
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Pagination;
