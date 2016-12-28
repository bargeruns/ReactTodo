import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '457',
        text: 'anything we like',
        completed: false,
        createdAt: 500
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'my todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
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