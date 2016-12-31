import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import firebase, {firebaseRef} from 'app/firebase';
import * as actions from 'actions';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'search'
    };
    const res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: '457',
        text: 'anything we like',
        completed: false,
        createdAt: 500
      }
    };
    const res = actions.addTodo(action.todo);

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
    const todos = [
      {
        id: 1,
        text: 'test',
        completed: false,
        completedAt: undefined,
        createdAt: 3000
      }
    ];
    const action = {
      type: 'ADD_TODOS',
      todos
    };
    const res = actions.addTodos(todos); 
    expect(res).toEqual(action);
  });
  
  it('should generate toggleShowCompleted action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    const res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate updateTodo action', () => {
    const updates = {
      completed: true,
      completedAt: 500
    };
    const action = {
      type: 'UPDATE_TODO',
      id: 45,
      updates
    };
    const res = actions.updateTodo(45, updates);

    expect(res).toEqual(action);
  });

  describe('Tests with Firebase data', () => {
    let testTodoRef = {};
    beforeEach((done) => {
      const todosRef = firebaseRef.child('todos');
      todosRef.remove()
        .then(() => {
          testTodoRef = firebaseRef.child('todos').push();

          return testTodoRef.set({
            text: 'something to do',
            completed: false,
            createdAt: 33333
          })
          .then(() => done());
        })
        .catch(done);
    });

    afterEach((done) => {
      firebaseRef.child(`todos/${testTodoRef.key}`).remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done());
    });


    it('should populate todos and dispatch ADD_TODOS action', (done) => {
      const store = createMockStore();
      const action = actions.startAddTodos();

      store.dispatch(action)
        .then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0].type).toEqual('ADD_TODOS');
          expect(mockActions[0].todos.length).toEqual(1);
          expect(mockActions[0].todos[0].text).toEqual('something to do');

          done();
        }, done());
    });
  });
});