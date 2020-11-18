import React from "react";

function FilterNav(props) {
  var filterNavArray = [];

  for (let j = 0; j <= props.i; j++) {
    filterNavArray.push(j);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <ul
        style={{
          backgroundColor: "#4e4e4e29",
          padding: "0.5rem 4rem",
          listStyle: "none",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <li
          style={{
            margin: "1rem 2rem",
            padding: "0 3rem",
            cursor: "pointer",
            color: "black",
          }}
        >
          {props.children}
        </li>
      </ul>
    </div>
  );
}

export default FilterNav;
