import $ from 'jQuery';
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import * as actions from 'actions';
import {AddTodo} from 'app/components/AddTodo';

describe('AddTodo component', ()=> { 
  it('should exist', ()=> {
    expect(AddTodo).toExist();
  });

  describe('adding todos', ()=> {
    it('should dispatch ADD_TODO action on valid input', () => {
      const todoText = 'Check mail';
      const action = actions.startAddTodo(todoText); 
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
      const $el = $(ReactDOM.findDOMNode(addTodo));
      const form = $($el.find('form'));

      addTodo.refs.todo.value = action.text;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(action); 
    });
    it('should not dispatch addTodo action if form empty', () => {
      const todoText = '';
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
      const $el = $(ReactDOM.findDOMNode(addTodo));
      const form = $($el.find('form'));

      addTodo.refs.todo.value = '';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });
});