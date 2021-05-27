import moment from "moment";
import React, { useState } from "react";

const TableRow = props => {
  let index = 0;
  let dateOut = props.data.checkOutDate;
  let dateIn = props.data.checkInDate;
  let nights = moment
    .utc(moment(dateOut, "YYYY-MM-DD").diff(moment(dateIn, "YYYY-MM-DD")))
    .format("D");

  let [selected, setSelected] = useState(false);
  let [className, setClassName] = useState("green");

  return (
    <tr
      onClick={() => setSelected(!selected)}
      className={selected ? className : "none"}
    >
      <th key={index + 2} scope="row">
        {props.data.id}
      </th>
      <td key={index + 3}>{props.data.title}</td>
      <td key={index + 4}>{props.data.firstName}</td>
      <td key={index + 5}>{props.data.surname}</td>
      <td key={index + 6}>{props.data.email}</td>
      <td key={index + 7}>{props.data.roomId}</td>
      <td key={index + 8}>{props.data.checkInDate}</td>
      <td key={index + 9}>{props.data.checkOutDate}</td>
      <td key={index + 10}>{nights - 1}</td>
    </tr>
  );
};

export default TableRow;
