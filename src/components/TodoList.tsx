import React, { FC } from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: number;
  title: string;
  complete: boolean;
};

type TodoListProps = {
  todos:Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  if (todos.length === 0) {
    return null;
  }

  return (
    <section id="container" className="m-2">
      <ul id="todo-list" className="list-group">
        {todos.toReversed().map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;