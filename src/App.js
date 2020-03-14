import React, { Component } from "react";
import Post from "./components/post/post";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Post />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    );
  }
}

export default App;
