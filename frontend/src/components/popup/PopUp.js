import React, { useState } from "react";
import ModelPop from "./ModelPop";
import BackDrop from "./BackDrop";
import "./popUp.css";

const PopUp = () => {
  const [popUp, setPopup] = useState(false);

  const handelOpen = () => {
    setPopup(true);
  };
  const handelClose = () => {
    setPopup(false);
  };

  return (
    <div className="btn-controll">
      <button className="pop-btn" onClick={handelOpen}>
        Create Card
      </button>
      {popUp ? <ModelPop /> : null}
      {popUp ? <BackDrop onClick={handelClose} /> : null}
    </div>
  );
};

export default PopUp;
