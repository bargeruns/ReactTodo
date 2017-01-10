import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import * as actions from 'actions';
import * as configureStore from 'configureStore';
import Login from 'Login';
import TodoAPI from 'TodoAPI';
import TodoApp from 'TodoApp';

const store = configureStore.configure();

store.dispatch(actions.startAddTodos());

//load Foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        <Route path='todos' component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router> 
  </Provider>, 
  document.getElementById('app')
);
