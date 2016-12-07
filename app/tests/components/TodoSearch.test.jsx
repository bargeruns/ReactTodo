var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('todo search', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with updated input text', ()=> {
    var searchText = 'test';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with checkbox value on check/uncheck', ()=> {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = 'checked';
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});