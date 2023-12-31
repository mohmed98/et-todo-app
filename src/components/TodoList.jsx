import React from "react";
import map from "lodash/map";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, onComplete }) => {
  const _renderTodos = () => {
    return map(todos, (todo, index) => {
      return <TodoItem key={index} id={index} onComplete={onComplete} {...todo} />;
    });
  };

  return <ul className="list-group todo-list">{_renderTodos()}</ul>;
};

export default TodoList;