import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
    </div>
  );
};

export default Spinner;
