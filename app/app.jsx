import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import * as actions from 'actions';
import * as configureStore from 'configureStore';
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
    <TodoApp/>
  </Provider>, 
  document.getElementById('app')
);
