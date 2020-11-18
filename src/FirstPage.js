import React from "react";
import FilterNav from "./FilterNav";
import "./FirstPage.scss";

function FirstPage(props) {
  return (
    <div>
      <FilterNav i={5}>
        <div className="root">
          <p>همه</p>

          <p>جدیدترین ها</p>

          <p>بهترین ها</p>

          <p>پرمخاطب ترین ها</p>

          <p>رایگان ها</p>
        </div>
      </FilterNav>
    </div>
  );
}

export default FirstPage;
