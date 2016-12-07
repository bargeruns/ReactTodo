var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var newTodo = this.refs.todo.value;
    if(newTodo.length) {
      this.refs.todo.value = '';
      this.props.onAddItem(newTodo);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;