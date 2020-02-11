import React, { Component } from "react";
import * as data from "../data/data";
import ResultCard from "./ResultCard";
import "./results.css";

class Results extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.setState({ results: data.hotels });
  }

  render() {
    const { results } = this.state;
    return (
      <ul className="resultsarea">
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
