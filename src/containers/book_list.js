import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
            className="list-group-item">
              {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )

  }
}


function mapStateToProps(state) {
  // whatever returned will show up as props
  // inside of BookList container
  return {
    books: state.books  // state is provided from reducers
  }
}

// NOTE use connect to promote Component into redux container
export default connect(mapStateToProps)(BookList);
