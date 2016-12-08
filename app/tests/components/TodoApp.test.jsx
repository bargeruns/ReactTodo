var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('todo app', () => {
  it('should exist', ()=> {
    expect(TodoApp).toExist();
  });

  it('should add todo to state.todos on handleAddTodo', ()=> {
    var todoText = 'test todo';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddItem(todoText);

    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', ()=> {
    var todoData = {
      id: 11,
      text: 'test todo',
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toEqual(true);
  });
});