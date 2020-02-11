import React, { Component } from "react";
import * as data from "../data/data";
import ResultCard from "./ResultCard";

class Results extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    console.log(data.hotels);
    this.setState({ results: data.hotels });
  }

  render() {
    const { results } = this.state;
    return (
      <ul>
        {results.map(result => {
          const { name, starRating, facilities } = result;
          return (
            <ResultCard
              key={name}
              name={name}
              starRating={starRating}
              facilities={facilities}
            />
          );
        })}
      </ul>
    );
  }
}

export default Results;
