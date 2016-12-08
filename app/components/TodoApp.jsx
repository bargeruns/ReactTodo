var React = require('react');
var uuid = require('node-uuid');

var AddTodo = require('AddTodo');
var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {id: uuid(), text: "Walk the dog"},
        {id: uuid(), text: "Make fake todos"},
        {id: uuid(), text: "Pass full props to the todo component"}
      ],
      showCompleted: false,
      searchText: ''
    }
  },
  handleAddItem: function(text) {
    console.log(text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos}/>
        <AddTodo onAddItem={this.handleAddItem}/>
      </div>
    );
  }
});

module.exports = TodoApp;