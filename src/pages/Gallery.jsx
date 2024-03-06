import React, { useState } from "react";
import "./Gallery.css";
const Gallery = () => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [tableNum, setTableNum] = useState(0);
  const [tableState, setTableState] = useState(false);
  const tableHandler = (e) => {
    setTableNum(e.target.innerHTML);
    setTableState(true);
  };
  return (
    <div className="MainTables">
      <div className="tables">
        {tableNum == 0 ? (
          <h1>Book Your Table</h1>
        ) : (
          <h1>You selected table number is {tableNum}</h1>
        )}
        <div className="tablesDiv">
          {tables.map((item, index) => (
            <div key={index} className="tableNums" onClick={tableHandler}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
