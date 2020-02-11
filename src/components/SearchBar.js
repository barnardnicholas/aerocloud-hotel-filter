import React, { Component } from "react";
import "./searchbar.css";

class SearchBar extends Component {
  state = {
    searchTerms: []
  };

  render() {
    return (
      <form className="searchbar">
        <button className="searchbutton">1</button>
        <button className="searchbutton">2</button>
        <button className="searchbutton">3</button>
      </form>
    );
  }
}

export default SearchBar;
