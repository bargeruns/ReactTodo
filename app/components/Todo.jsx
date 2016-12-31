import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

export const Todo = React.createClass({
  render: function() {
    const {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Added ';
      let timestamp = createdAt;

      if(completed) {
        message = 'Completed';
        timestamp = completedAt;
      }

      return `${message} ${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`;
    }
    return (
      <div className={todoClassName} onClick={()=> {
        dispatch(actions.startToggleTodo(id, !completed))
      }}>
        <div>
          <input type="checkbox" ref="" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);