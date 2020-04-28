import React, { Component } from "react";

import axios from "axios";

import Navbar from "./components/navbar/Navbar";
import DogList from "./components/dog-list/DogList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
    };
  }

  componentDidMount = () => {
    this.getDogs();
  };

  getDogs = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random/10")
      .then((res) => {
        this.setState({ dogs: res.data.message });
      })
      .catch((err) => {
        return err;
      });
  };

  render() {
    const { dogs } = this.state;
    return (
      <div>
        <Navbar />
        <DogList dogs={dogs} />
      </div>
    );
  }
}

export default App;
