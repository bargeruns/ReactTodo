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
});