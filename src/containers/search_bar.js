import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    // NOTE previously use fat arrow to bind this automatically
  }

  onInputChange(event) {
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // fetch weather data from API
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="get a 5-day forecast in your city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

export default SearchBar;
