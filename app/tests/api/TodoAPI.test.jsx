var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('todo API', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  describe('set todos', () => {
    it('should set valid todos array', (done) => {
      var todos = [{
        id: 22,
        text: 'test 22',
        completed: false
      }];

      TodoAPI.setTodos(todos);
      expect(JSON.parse(localStorage.getItem('todos'))).toEqual(todos);
      done();
    });

    it('should not set invalid todos array', (done) => {
      var todos = { a: 2, b: 'franklin comes alive' };

      TodoAPI.setTodos(todos);
      expect(localStorage.getItem('todos')).toBe(null);
      done();
    });
  });

  describe('get todos', () => {
    it('should return an empty array if no todos in localStorage', () => {
      var todos = TodoAPI.getTodos();

      expect(todos).toEqual([]);
    });

    it('should return todos if todos in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test 23',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      expect(TodoAPI.getTodos()).toEqual(todos);
    });

  });

  describe('filter todos', () => {
    var todos = [
      { id: 2, text: 'completed todo', completed: true },
      { id: 1, text: 'incomplete todo', completed: false },
      { id: 3, text: 'another completed todo', completed: true }
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should only return incomplete items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort todos by completed', ()=> {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'completed');

      expect(filteredTodos.length).toBe(2);
    });

    it('should not filter todos by searchText if query is less than 3 characters', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'co');

      expect(filteredTodos.length).toBe(3);
    });
  });
});