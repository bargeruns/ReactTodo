import $ from 'jQuery';
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {TodoSearch} from 'TodoSearch';

describe('todo search', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch setSearchText action on input change', ()=> {
    const searchText = 'test';
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch toggleShowCompleted action when checkbox clicked', ()=> {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});