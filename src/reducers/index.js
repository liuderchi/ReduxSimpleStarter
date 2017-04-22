import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // stateName: (state = {}) => state
  books: BooksReducer,    // NOTE map BooksReducer to corresponding key of state 'books'
  activeBook: ActiveBook
});

export default rootReducer;
