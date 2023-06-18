import React from "react";
import "../App.css";
import Button from "./Button";
const Card = ({ data }) => {

  const styles = ["Yellow", "Green", "Red"];
  
  return (
    <div className="Card">
      <div style={{ marginLeft: "1%" }}>
        <p className="paragraph">{data.topic}</p>
        {data.keywords.map((e, index) => (
          <button className={styles[index % 3]}>branding</button>
        ))}
      </div>
      <Button data="Write >" link="TextEditor" />
    </div>
  );
};

export default Card;
