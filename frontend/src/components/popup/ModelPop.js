import React, { useState } from "react";
import "./modelPop.css";
import Axios from "axios";

const ModelPop = (props) => {
  const [postData, setPostData] = useState({
    name: "",
    age: 0,
  });

  const id = props.id;
  console.log(id);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await Axios.patch("http://localhost:5000/posts/update", {
          id: id,
          postData,
        });
      } else {
        await Axios.post("http://localhost:5000/posts", postData);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="model">
      <h1>Create Card</h1>
      <form onSubmit={handelSubmit}>
        <div className="input-side">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={postData.name}
            required
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}
          />
        </div>

        <div className="input-side">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={postData.age}
            required
            onChange={(e) => setPostData({ ...postData, age: e.target.value })}
          />
        </div>

        <div className="btn-right">
          <button type="submit" className="pop-btn">
            Create New
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModelPop;
