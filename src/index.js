import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>Hello</div>
  )
  // NOTE JSX is transpiled into React.createElement(...)
}

ReactDOM.render(<App />, document.querySelector('.container'))
