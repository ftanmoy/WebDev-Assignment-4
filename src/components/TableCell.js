const TableCell = ({colorSelected, handleApplyColor}) => {
  return <td style={{backgroundColor: colorSelected}} onClick={handleApplyColor}></td>
}

export default TableCell;
