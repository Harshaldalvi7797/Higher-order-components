import React, { Component } from "react";
import Axios from "axios";
import Withdata from "../withdata";

const User = props => {
  return (
    <React.Fragment>
      {props.item.map(data => (
        <div
          className="card text-left bg-success"
          style={{ margin: "20px" }}
          key={data.id}
        >
          <div className="card-body">
            <h4 className="card-title">{data.name}</h4>
            <p className="card-text">{data.username}</p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Withdata(User, "https://jsonplaceholder.typicode.com/users");
