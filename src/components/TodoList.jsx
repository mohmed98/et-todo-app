import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingTodoId: null,
      editingTodoText: '',
    };
  }



  render() {
    if (this.props.todos.size === 0) {
      return null;
    }

    return (
      <section id="container" className="m-2">
        <ul id="todo-list" className="list-group">
          {[...this.props.todos.values()].reverse().map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
           
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;