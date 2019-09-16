import React, { Component } from "react";
import axios from "axios";
import List from "./List";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    };
    this.getPlanets = this.getPlanets.bind(this);
  }
  getPlanets() {
    return axios.get("https://swapi.co/api/planets/").then(response => {
      console.log(response.data.results);
      this.setState({
        planets: response.data.results.slice(0, 5)
      });
    });
  }
  componentDidMount() {
    this.getPlanets();
  }

  render() {
    const { planets } = this.state;
    return (
      <div className="App">
        <h1>Planets</h1>
        <List planets={planets} />
      </div>
    );
  }
}