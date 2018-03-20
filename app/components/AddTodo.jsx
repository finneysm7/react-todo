var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strTask = this.refs.todoText.value;

    if (strTask.length > 0) {
      this.refs.todoText.value = '';
      this.props.onSetTask(strTask);
    } else {
      this.refs.todoText.focus();
    }

  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="Enter task"/>
          <button className="button expanded">Add todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
