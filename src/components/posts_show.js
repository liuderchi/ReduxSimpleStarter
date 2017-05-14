import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;  // post id from url
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>Post Show!</div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  // NOTE ownProps: ref to component: this.props

  return { post: posts[ownProps.match.params.id] };
  // getting this.props.match.params.id from component
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
