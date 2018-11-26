import React, { Component } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

class SearchForm extends Component {
  state = {
    keyword: ""
  };

  onSearchChange = event => {
    this.setState({ keyword: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.query.value);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <h1 className="form-header">Search for images</h1>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.onSearchChange}
            ref={input => (this.query = input)}
            name="search"
            placeholder="Search..."
          />
          <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
