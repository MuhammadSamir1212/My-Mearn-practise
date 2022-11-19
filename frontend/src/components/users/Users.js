import React, { useState, useEffect } from "react";
import "./Users.css";
import Axios from "axios";
import ModelPop from "../popup/ModelPop";
import BackDrop from "../popup/BackDrop";

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/posts").then((res) => {
      setUserData(res.data);
    });
  }, []);

  const [popUp, setPopup] = useState(false);

  const handelOpen = () => {
    setPopup(true);
  };
  const handelClose = () => {
    setPopup(false);
  };

  return !userData.length ? (
    <h2 className="loading">Loading...</h2>
  ) : (
    <div className="user-container">
      {userData.map((user, key) => {
        return (
          <div className="user-content" key={key}>
            <div className="users-items">
              <h2>
                Name: <span>{user.name}</span>
              </h2>
              <h2>
                Age: <span>{user.age}</span>
              </h2>
            </div>
            <div className="users-btn">
              <button className="btn-edite" onClick={handelOpen}>
                Edite
              </button>
              {popUp ? <ModelPop id={user._id} /> : null}
              {popUp ? <BackDrop onClick={handelClose} /> : null}
              <button className="btn-delete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
