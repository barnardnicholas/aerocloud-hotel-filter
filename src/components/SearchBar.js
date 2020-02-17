import React, { Component } from "react";
import "./searchbar.css";
const { removeItemFromArray } = require("../utils/utils");

class SearchBar extends Component {
  state = {
    searchTerms: []
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
    this.setState({ searchTerms: newSearchTerms });
  };

  clearSearchTerms = () => {
    this.setState({ searchTerms: [] });
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
    return (
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
        {/* <button className="searchbutton" onClick={this.clickToToggle}>
          gym
        </button>
        <button className="searchbutton" onClick={this.clickToToggle}>
          spa
        </button>
        <button className="searchbutton" onClick={this.clickToToggle}>
          sauna
        </button>
        <button className="searchbutton" onClick={this.clickToToggle}>
          ice machine
        </button>
        <button className="searchbutton" onClick={this.clickToToggle}>
          pool
        </button> */}
        <button
          className="searchbutton"
          onClick={this.clearSearchTerms}
          style={{ width: "48px" }}
        >
          clear
        </button>
      </form>
    );
  }
}

export default SearchBar;
