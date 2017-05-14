import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;  // post id from url
      this.props.fetchPost(id);
    }
  }

  render() {
    const { post } = this.props;

    // NOTE handle app init state post is undefined
    if (!post) {
      return ( <div>Loading...</div> );
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  // NOTE ownProps: ref to component: this.props

  return { post: posts[ownProps.match.params.id] };
  // getting this.props.match.params.id from component
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
