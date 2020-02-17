import React, { Component } from "react";
import "./searchbar.css";
import Results from "./Results";
import * as data from "../data/data";
const { removeItemFromArray } = require("../utils/utils");
const { detectMatch } = require("../utils/utils");

class SearchBar extends Component {
  state = {
    searchTerms: [],
    results: []
  };

  preventReload = event => {
    event.preventDefault();
  };

  clickToToggle = event => {
    const { innerHTML } = event.target;
    let newSearchTerms = [...this.state.searchTerms];
    if (newSearchTerms.includes(innerHTML)) {
      newSearchTerms = removeItemFromArray(newSearchTerms, innerHTML);
    } else {
      newSearchTerms.push(innerHTML);
    }
    let newResults = data.hotels.filter(result => {
      return detectMatch(result, newSearchTerms);
    });
    this.setState({ searchTerms: newSearchTerms, results: newResults });
  };

  clearSearchTerms = () => {
    this.setState({ searchTerms: [], results: data.hotels });
  };

  renderButton = innerHTML => {
    const { searchTerms } = this.state;
    const buttonStyling = {
      backgroundColor: searchTerms.includes(innerHTML) ? "black" : "white",
      color: searchTerms.includes(innerHTML) ? "white" : "black"
    };
    return (
      <button
        className="searchbutton"
        onClick={this.clickToToggle}
        style={buttonStyling}
      >
        {innerHTML}
      </button>
    );
  };

  render() {
    const { results, searchTerms } = this.state;
    return (
      <>
        <form className="searchbar" onSubmit={this.preventReload}>
          <div
            className="searchbutton"
            style={{ border: "none", fontSize: "10px" }}
          >
            <label>Show me hotels with:</label>
          </div>
          {this.renderButton("car park")}
          {this.renderButton("spa")}
          {this.renderButton("sauna")}
          {this.renderButton("ice machine")}
          {this.renderButton("pool")}
          <button
            className="searchbutton"
            onClick={this.clearSearchTerms}
            style={{ width: "48px" }}
          >
            clear
          </button>
        </form>
        <Results results={results} searchTerms={searchTerms} />
      </>
    );
  }

  componentDidMount() {
    this.setState({ results: data.hotels });
  }
}

export default SearchBar;
