import React from "react";
import TableRow from "./TableRow";
const SearchResults = props => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th key="1" scope="col">
              id
            </th>
            <th key="2" scope="col">
              title
            </th>
            <th key="3" scope="col">
              first name
            </th>
            <th key="4" scope="col">
              surname
            </th>
            <th key="5" scope="col">
              email
            </th>
            <th key="6" scope="col">
              room id
            </th>
            <th key="7" scope="col">
              check in date
            </th>
            <th key="8" scope="col">
              check out date
            </th>
            <th key="9" scope="col">
              number of nights
            </th>
          </tr>
        </thead>
        <tbody>
          <React.Fragment>
            {props.customerData.map((item, index) => {
              return <TableRow key={index} data={item} />;
            })}
          </React.Fragment>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
