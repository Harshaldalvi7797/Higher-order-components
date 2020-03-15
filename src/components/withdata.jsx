import React, { Component } from "react";
import Axios from "axios";

const Withdata = (Compoenentwrapper, data) => {
  class Withdata extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
    async componentDidMount() {
      let response = await Axios.get(data);
      this.setState({ items: response.data.slice(0, 4) });
    }
    render() {
      return (
        <React.Fragment>
          <Compoenentwrapper item={this.state.items} />
        </React.Fragment>
      );
    }
  }
  return Withdata;
};
export default Withdata;
