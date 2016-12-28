import $ from 'jQuery';
import expect from 'expect';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('todo list', ()=> {
  it('should exist', ()=> {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', ()=> {
    const todos = [
      {
        id: 1,
        text: "test 1",
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: "test 2",
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];
    const store = configure({
      todos
    });
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todoComponents.length).toEqual(todos.length);
  });

  it('should render empty message if no todos', () => {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});