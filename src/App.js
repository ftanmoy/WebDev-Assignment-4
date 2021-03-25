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

  //This function will fill in all of the cells color to the selected one, even if they are not empty
  const fill = () => {
      var rows =  document.getElementById("grid").getElementsByTagName('td');
      for (var i = 0; i < rows.length; i++) {
          rows[i].style.backgroundColor = color;
      }
  };

  //This function will fill in empty cells color to the selected one.
  const fillUncolored = () => {
      var rows =  document.getElementById("grid").getElementsByTagName('td');
      for (var i = 0; i < rows.length; i++) {
          if (rows[i].style.backgroundColor === "") {
              rows[i].style.backgroundColor = color;
          }
      }
  };

  //This function will clear all cells color.
  const clearAll = () => {
      var rows =  document.getElementById("grid").getElementsByTagName('td');
      for (var i = 0; i < rows.length; i++) {
          rows[i].style.backgroundColor = "";
      }
  };

  return (
  <div>
    <h1 class='header'>ReactGrid</h1>
      <button onClick={addRow}>Add Row</button>
      <button onClick={addCol}>Add Column</button>
      <button onClick={removeRow}>Remove Row</button>
      <button onClick={removeCol}>Remove Column</button>
      <button onClick={fillUncolored}>Fill Uncolored</button>
      <button onClick={fill}>Fill All</button>
      <button onClick={clearAll}>Clear</button>

      <select onChange={colorSelected}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="brown">Brown</option>
      </select>

      <Table numRows={rows} numCols={cols} handleApplyColor={handleApplyColor} />


    </div>
  );
};

export default App;
