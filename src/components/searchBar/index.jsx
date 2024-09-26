import React from "react";
import "./styles.scss";

const index = () => {
  return (
    <>
      <div className="SearchBar">
        <div className="searchField">
          <button>
            <img src="/Search.svg" alt="" />
          </button>
          <input type="text" placeholder="Search doctors, services..." />
        </div>
      </div>
    </>
  );
};

export default index;
