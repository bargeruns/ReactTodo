import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export const AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let newTodo = this.refs.todo.value;

    if(newTodo.length) {
      this.refs.todo.value = '';
      dispatch(actions.startAddTodo(newTodo));
    }
    
    this.refs.todo.focus();
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todo" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);