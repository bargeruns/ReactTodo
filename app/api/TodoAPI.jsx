var $ = require('jquery');
module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var todos = JSON.parse(localStorage.getItem('todos'));
    if ($.isArray(todos)) {
      return todos;
    }
    return [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    // Filter by search
    filteredTodos = filteredTodos.filter((todo) => {
      if (searchText.length < 3) {
        return true;
      }
      return todo.text.includes(searchText.toLowerCase());
    });
    // Sort with incomplete first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      }
      if (a.completed && !b.completed) {
        return 1;
      }
      return 0;
    });
    return filteredTodos;
  }
};