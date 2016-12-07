var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('todo', () => {
  it('should exist', ()=> {
    expect(Todo).toExist();
  });
});