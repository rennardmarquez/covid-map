import React from "react";
import "./DataContainer.scss";

const DataContainer = ({ data, children, color }) => (
  <div className="data-container">
    <div className="label">
      <div
        className="legend"
        style={{
          backgroundColor: `${color}`
        }}
      />
      {children}
    </div>
    <div
      className="data"
      style={{
        color: `${color}`
      }}
    >
      {data}
    </div>
  </div>
);

export default DataContainer;
