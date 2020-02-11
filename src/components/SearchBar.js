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
  };

  render() {
    return (
      <form className="searchbar" onSubmit={this.preventReload}>
        <div className="searchbutton" style={{ border: "none" }}>
          <label>Search Terms</label>
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
      </form>
    );
  }
}

export default SearchBar;
