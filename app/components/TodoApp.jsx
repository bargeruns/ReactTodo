import React from 'react';

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="page-actions">
          <a href="#">Logout</a>
        </div>
        <h1 className="page-title">ReactTodos</h1> 
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/> 
            </div> 
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;