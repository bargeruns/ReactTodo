var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var newTodo = this.refs.todo.value;

    if(newTodo.length) {
      this.refs.todo.value = '';
      return this.props.onAddItem(newTodo);
    }
    
    this.refs.todo.focus();
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;