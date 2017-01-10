import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
import * as configureStore from 'configureStore';
import firebase from 'app/firebase/';
import router from 'app/router/';

const store = configureStore.configure();
store.dispatch(actions.startAddTodos());

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    return hashHistory.push('/todos');
  }
  return hashHistory.push('/');
});


//load Foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    {router}    
  </Provider>, 
  document.getElementById('app')
);
