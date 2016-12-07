var React = require('react');

var AddTodo = require('AddTodo');
var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {id: 1, text: "Walk the dog"},
        {id: 2, text: "Make fake todos"},
        {id: 3, text: "Pass full props to the todo component"}
      ],
      showCompleted: false,
      searchText: ''
    }
  },
  handleAddItem: function(text) {
    console.log(text);
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