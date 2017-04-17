import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // stateName: (state = {}) => state
  books: BooksReducer    // NOTE map BooksReducer to corresponding key of state 'books'
});

export default rootReducer;
