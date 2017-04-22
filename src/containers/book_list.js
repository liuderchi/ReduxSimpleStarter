import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
            onClick={() => {this.props.selectBook(book)}}
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

// anything returned from this fcn will end up props
// for BookList container
function mapActionToProp(dispatch) {
  // NOTE define action: selectBook with action creator: selectBook
  // "dispatch" furthermore handles actions and make sure to let actions
  // flows though all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// NOTE use connect to promote Component into redux container
// it needs to know about his new dispatch method: selectBook
// make it available as a prop
export default connect(mapStateToProps, mapActionToProp)(BookList);
