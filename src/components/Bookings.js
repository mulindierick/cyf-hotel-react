import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  let [filteredData, setFilteredData] = useState([]);
  let [bookingData, setBookingData] = useState(null);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setBookingData(data);
        setFilteredData(data);
      })
      .catch(error => console.log(error));
  }, []);
  // useEffect(() => {
  //   if (bookingData) {
  //     setFilteredData(bookingData);
  //   }
  // }, [bookingData]);

  const search = searchVal => {
    let newData = [...bookingData];
    let result = newData.filter(item => {
      const fullName = item.firstName + item.surname;
      const searchRegex = new RegExp(searchVal, "i");
      console.log(searchRegex.test(fullName));
      return searchRegex.test(fullName);
    });
    setFilteredData(result);
  };

  return (
    <React.Fragment>
      {bookingData ? (
        <React.Fragment>
          <div className="App-content">
            <div className="container">
              <Search search={search} />
              <SearchResults customerData={filteredData} />
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Bookings;
