// NOTE state arg here is NOT application level state
// it's an object flowing around this reducer each time
// this reducer is called

export default (state=null, action) => {
  // reducer should check action type using switch clause
  // to making corresponding states

  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
};
