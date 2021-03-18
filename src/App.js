import React, { useState } from "react";
import './App.css';
import Table from './components/Table';

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
  const clearAll = () => {};

  return (
  <div>
    <h1>ReactGrid</h1>
      <button onClick={addRow}>Add Row</button>
      <button onClick={addCol}>Add Column</button>
      <button onClick={removeRow}>Remove Row</button>
      <button onClick={removeCol}>Remove Column</button>
      <button onClick={fillUncolored}>Fill Uncolored</button>
      <button onClick={fill}>Fill All</button>
      <button onClick={clearAll}>Clear</button>

      <select onChange={colorSelected}>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>

      <Table numRows={rows} numCols={cols} handleApplyColor={handleApplyColor} />

    </div>
  );
};

export default App;
