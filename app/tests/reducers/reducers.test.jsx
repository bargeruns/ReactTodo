var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', ()=> {
    it('should set searchText', ()=> {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });

    it('should toggle showCompleted', ()=> {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', ()=> {
    it('should add new todo', ()=> {
      var action ={
        type: 'ADD_TODO',
        text: 'Write test for todo reducer'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle completed status of todo', ()=> {
      var todos = [{id: 45, text: 'complete me', completed: true, createdAt: 123, completedAt: 125}];
      var action = {
        type: 'TOGGLE_TODO',
        id: 45
      };

      var res = reducers.todosReducer(df(todos), df(action));
      
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });

});