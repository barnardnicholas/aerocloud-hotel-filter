import React, { Component } from "react";
import "./searchbar.css";

class SearchBar extends Component {
  state = {
    searchTerms: []
  };

  preventReload = event => {
    event.preventDefault();
  };

  clickToToggle = event => {
    const { innerHTML } = event.target;
    console.dir(innerHTML);
    const newSearchTerms = [...this.state.searchTerms];
    if (newSearchTerms.includes(innerHTML)) {
      // need util to remove item from array
    }
    this.setState({ searchTerms: newSearchTerms });
  };

  clearSearchTerms = () => {
    this.setState({ searchTerms: [] });
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
        <button className="searchbutton" onClick={this.clickToToggle}>
          car park
        </button>
        <button className="searchbutton" onClick={this.clickToToggle}>
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
        </button>
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
