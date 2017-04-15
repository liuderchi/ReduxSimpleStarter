import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
    // NOTE only in constructor can set state directly
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value})} />
        entered state: {this.state.term}
      </div>
    )
  }
}

export default SearchBar
