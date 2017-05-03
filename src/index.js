import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Myhello extends React.Component {
  render() { return (<div>hello</div>) }
}
class Mybyebye extends React.Component {
  render() { return (<div>byebye</div>) }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Myhello} />
        <Route path="/byebye" component={Mybyebye} />
      </div>
    </ BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
