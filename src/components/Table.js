import React from "react";
import TableRow from "./TableRow";

const Table = ({ numRows, numCols, handleApplyColor }) => {
  return (
    <table id="grid">
      <tbody>
      {[...Array(numRows)].map((val, index) => (
        <TableRow
          key={index}
          numCols={numCols}
          handleApplyColor={handleApplyColor} />
      ))}
      </tbody>
    </table>
 );
};
export default Table;