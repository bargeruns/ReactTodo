module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

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