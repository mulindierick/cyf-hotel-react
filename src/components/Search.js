import React from "react";
import SearchButton from "./SearchButton";
import { useState } from "react";

const Search = props => {
  let [searchInput, setSearchInput] = useState("");

  // search with a button
  function handleClick(e) {
    e.preventDefault();
    props.search(searchInput);
  }

  // real time search
  function handleSearchInput(e) {
    e.preventDefault();
    setSearchInput(e.target.value);

    // send input value to the parent
    props.search(e.target.value);
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings {searchInput}</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleClick} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                value={searchInput}
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
