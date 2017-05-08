import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>This is Posts index page!</div>
    )
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
// NOTE we don't use mapDispatchToProps() since adding dispatch was just a more flexible API usage
