import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";

const Heroine = ({ heroine }) => {
  return (
    <div className="header">
      <div className="nameTitle">
        <h4>CARLOTA JUNCOSA</h4>
        <h4>/ FULL STACK DEVELOPER JR & CARTOONIST</h4>
      </div>
      <Navbar />
    </div>
  );
};

export default Heroine;
