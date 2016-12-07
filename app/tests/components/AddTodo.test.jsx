var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo component', ()=> { 
  it('should exist', ()=> {
    expect(AddTodo).toExist();
  });

  describe('adding todos', ()=> {
    it('should not try to add todo if field empty', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddItem={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodo));
      var form = $($el.find('form'));

      addTodo.refs.todo.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
    it('should call this.props.onAddItem on form submit', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddItem={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodo));
      var form = $($el.find('form'));

      addTodo.refs.todo.value = 'write tests for AddTodo';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith('write tests for AddTodo'); 
    });
  });
});