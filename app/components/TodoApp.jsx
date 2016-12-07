var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {id: 1, text: "Walk the dog"},
        {id: 2, text: "Make fake todos"},
        {id: 3, text: "Pass full props to the todo component"}
      ]
    }
  },
  handleAddItem: function(text) {
    console.log(text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddItem={this.handleAddItem}/>
      </div>
    );
  }
});

module.exports = TodoApp;