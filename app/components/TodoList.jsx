import React from 'react';
import {connect} from 'react-redux';

import TodoAPI from 'TodoAPI';
import Todo from 'Todo';

export const TodoList = React.createClass({
  render: function() {
    const {todos, showCompleted, searchText} = this.props;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    const renderTodos = ()=> {
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do!</p>
        );
      }
      return filteredTodos.map((todo)=> {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    }
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect((state)=> {
  return state;
})(TodoList);