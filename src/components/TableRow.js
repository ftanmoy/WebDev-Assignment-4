import TableCell from "./TableCell";

const TableRow = ({ numCols, handleApplyColor }) => {
  return (
    <tr>
      {[...Array(numCols)].map((val, index) => (
        <TableCell key={index} handleApplyColor={handleApplyColor} />
      ))}
    </tr>
  );
}

export default TableRow;
