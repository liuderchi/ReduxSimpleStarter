export function selectBook(book) {
  // called when action occurs

  // should return an action obj with prop: type, payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
    // NOTE payload is critical object passed on to reducers
  };
}
