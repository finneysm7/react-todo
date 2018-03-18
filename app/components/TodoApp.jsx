var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Call Aden'
        }, {
          id: 4,
          text: 'Buy plane Tix'
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <TodoForm onSetTask={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
