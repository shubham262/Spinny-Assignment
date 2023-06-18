import React from "react";
import "../App.css";
import Card from "./Card";

const List = ({ data }) => {
  
  return (
    <div>
      <div className="ListHeading">
        <span className="heading">Recommended Topics</span>
      </div>
      {data.map((e) => (
        <Card data={e} />
      ))}
    </div>
  );
};

export default List;
