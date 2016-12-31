import expect from 'expect';
import TodoAPI from 'app/api/TodoAPI';

describe('todo API', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  describe('filter todos', () => {
    const todos = [
      { id: 2, text: 'completed todo', completed: true },
      { id: 1, text: 'incomplete todo', completed: false },
      { id: 3, text: 'another completed todo', completed: true }
    ];

    it('should return all items if showCompleted is true', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should only return incomplete items if showCompleted is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort todos by completed', ()=> {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'completed');

      expect(filteredTodos.length).toBe(2);
    });

    it('should not filter todos by searchText if query is less than 3 characters', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'co');

      expect(filteredTodos.length).toBe(3);
    });
  });
});