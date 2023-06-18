import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Button = ({ data, link }) => {
  
  return (
    <>
      <Link className="btn" to={link}>
        {data}
      </Link>
      
    </>
  );
};

export default Button;
