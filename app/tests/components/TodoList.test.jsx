var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('todo list', ()=> {
  it('should exist', ()=> {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', ()=> {
    var todos = [{id: 1, text: "test 1"},{id: 2, text: "test 2"}];

    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo);

    expect(todoComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});