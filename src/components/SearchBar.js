import React, { Component } from "react";
import "./searchbar.css";

class SearchBar extends Component {
  state = {
    searchTerms: []
  };

  render() {
    return (
      <form className="searchbar">
        <div className="searchbutton" style={{ border: "none" }}>
          <label>Search Terms</label>
        </div>
        <button className="searchbutton">1</button>
        <button className="searchbutton">2</button>
        <button className="searchbutton">3</button>
      </form>
    );
  }
}

export default SearchBar;
