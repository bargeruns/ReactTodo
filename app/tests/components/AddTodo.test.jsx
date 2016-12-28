var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo component', ()=> { 
  it('should exist', ()=> {
    expect(AddTodo).toExist();
  });

  describe('adding todos', ()=> {
    it('should dispatch ADD_TODO action on valid input', () => {
      var todoText = 'Check mail';
      var action = actions.startAddTodo(todoText); 
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodo));
      var form = $($el.find('form'));

      addTodo.refs.todo.value = action.text;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(action); 
    });
    it('should not dispatch addTodo action if form empty', () => {
      var todoText = '';
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodo));
      var form = $($el.find('form'));

      addTodo.refs.todo.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });
});