var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('todo API', ()=> {
  it('should exist', ()=>{
    expect(TodoAPI).toExist();
  });

  beforeEach(()=> {
    localStorage.removeItem('todos');
  });

  describe('set todos', ()=> {
    it('should set valid todos array', (done)=> {
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
      var todos = {a: 2, b: 'franklin comes alive'};

      TodoAPI.setTodos(todos);
      expect(localStorage.getItem('todos')).toBe(null);
      done();
    });
  });

  describe('get todos', ()=> {
    it('should return an empty array if no todos in localStorage', ()=> {
      var todos = TodoAPI.getTodos();

      expect(todos).toEqual([]);
    });

    it('should return todos if todos in localStorage', ()=> {
      var todos = [{
        id: 23,
        text: 'test 23',
        completed: false
      }];

      localStorage.setItem('todos',JSON.stringify(todos));
      expect(TodoAPI.getTodos()).toEqual(todos);
    });

  })
})