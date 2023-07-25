import React from "react";
import "./Construction_progress.css";

const Construction_progress = ({data, value}) => {
  return (
    <div className="construction_progress">
        <h1>{data} Page</h1>
      <h2>UNDER CONSTRUCTION</h2>
      <div className="construction_progress_content">
        <label>PAGE NEARLY READY</label>
        <progress max="100" value={value}></progress>
        <label>
          <span>0%</span>
          <span>100%</span>
        </label>
      </div>

      <button>Notify Me!</button>

      <a href="home">Home Page</a>
    </div>
  );
};

export default Construction_progress;
