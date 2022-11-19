import React from "react";
import "./popUp.css";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onClick} />;
};

export default BackDrop;
