var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'search'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Test the add todo action'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate addTodos action', () => {
    var todos = [
      {
        id: 1,
        text: 'test',
        completed: false,
        completedAt: undefined,
        createdAt: 3000
      }
    ];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos); 
    expect(res).toEqual(action);
  });
  
  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 45
    };
    var res = actions.toggleTodo(45);

    expect(res).toEqual(action);
  });
});