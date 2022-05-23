import React from ".react";

import "./ChartBar.css";

const ChartBar = (props) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="class-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="class-bar__label">{props.label}</div>
    </div>
  );
};
