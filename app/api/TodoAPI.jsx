var $ = require('jquery');
module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    if ($.isArray(todos)) {
      return todos;
    }
    return [];
  }
};