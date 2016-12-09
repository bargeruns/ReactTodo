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

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
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
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should remove completedAt date when toggled from completed to incomplete', () => {
    var todoData = {
      id: 12,
      text: 'complete me',
      completed: true,
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});
    todoApp.handleToggle(12);
    
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  });
});