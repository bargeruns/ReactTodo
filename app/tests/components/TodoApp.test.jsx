import $ from 'jQuery';
import expect from 'expect';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import * as configureStore from 'configureStore';
import {TodoApp} from 'TodoApp';
import TodoList from 'TodoList';

describe('todo app', () => {
  it('should exist', ()=> {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', ()=> {
    const store = configureStore.configure();
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});