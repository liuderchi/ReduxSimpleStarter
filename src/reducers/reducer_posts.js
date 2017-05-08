import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state={}, action) {
  switch (action.type) {

  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id');
    // NOTE map array of obj into big object with specified values as new keys
    // if values has dup, last one overwites

  default:
    return state;
  }
}
