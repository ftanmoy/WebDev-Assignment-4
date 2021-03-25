import React, { useState } from "react";
import './App.css';
import Table from './components/Table';
import TableCell from './components/TableCell'

const App = () => {
  const [rows, setRow] = useState(0);
  const [cols, setCol] = useState(0);
  const [color, setColor] = useState("red");

  const addRow = () => {
    if (rows === 0) {
      setRow(1);
      setCol(1);
    }
    else {
      setRow(rows => rows + 1);
    }
    console.log(rows)
  };
  const addCol = () => {
    if (cols === 0) {
      setRow(1);
      setCol(1);
    }
    else {
      setCol(cols => cols + 1);
    }
  };

  const removeRow = () => {
    if (rows > 0) {
      if (rows === 1){
        setRow(0);
        setRow(0);
      }
      else {
        setRow(rows => rows - 1);
      }
      console.log(rows)
    }
  };

  const removeCol = () => {
    if (cols > 0) {
      if (cols === 1){
        setCol(0);
        setCol(0);
      }
      else {
        setCol(cols => cols - 1);
      }
      console.log(cols)
    }
  };

  const colorSelected = e => setColor(e.target.value);

  const handleApplyColor = e => (e.target.style.backgroundColor = color);

  const fill = () => {};
  const fillUncolored = () => {};
/*
  const onSelected = () => {
    if(TableCell.backgroundColor == 'white'){
      this.state = {
        useEffect() {
          document.td.style.backgroundColor = colorSelected;

          return () => {
            document.td.style.backgroundColor = colorSelected;
          }
      }
  };
*/
  const clearAll = () => {};

  return (
  <div>
    <h1 class='header'>ReactGrid</h1>
    <div class='description'>
      <p>Add some rows and columns, create a grid, and draw a picture.</p>
      <p>CHALLENGE: Create an AmongUs character!</p>
    </div>
      <button onClick={addRow}>Add Row</button>
      <button onClick={addCol}>Add Column</button>
      <button onClick={removeRow}>Remove Row</button>
      <button onClick={removeCol}>Remove Column</button>
      <button onClick={fillUncolored}>Fill Uncolored</button>
      <button onClick={fill}>Fill All</button>
      <button onClick={clearAll} class="clear">Clear</button>

      <select onChange={colorSelected}>
        <option value="red">Red</option>
        <option value="#ffc0cb">Pink</option>
        <option value="#FFE5B4">Peach</option>
        <option value="#1338be">Blue</option>
        <option value="#000080">Navy Blue</option>
        <option value="yellow">Yellow</option>
        <option value="brown">Brown</option>
        <option value="#00FFFF">Cyan</option>
        <option value="">Erase</option>

      </select>

      <Table numRows={rows} numCols={cols} handleApplyColor={handleApplyColor} />


    </div>
  );
};

export default App;
