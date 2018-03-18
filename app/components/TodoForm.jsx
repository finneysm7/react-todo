var React = require('react');

var TodoForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strTask = this.refs.todoText.value;

    this.refs.todoText.value = '';
    this.props.onSetTask(strTask);
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

module.exports = TodoForm;
