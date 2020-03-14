import React, { Component } from "react";
import Axios from "axios";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  async componentDidMount() {
    let response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ posts: response.data.slice(0, 4) });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.posts.map(data => (
          <div
            className="card text-white bg-danger"
            key={data.id}
            style={{ margin: "20px" }}
          >
            <div className="card-body">
              <h4 className="card-title">{data.title}</h4>
              <p className="card-text">{data.body}</p>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default Post;
