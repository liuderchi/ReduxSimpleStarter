import React from 'react';   // dependencies for JSX
import ReactDOM from 'react-dom';

// create an functional component App
const App = () => {
  return (
    <div>Hello</div>
  )
  // NOTE JSX is transpiled into React.createElement(...)
}

// render component into DOM with specified DOM target
ReactDOM.render(<App />, document.querySelector('.container'))
