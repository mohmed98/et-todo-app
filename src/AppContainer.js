import React from 'react';
import { withSelect, withDispatch } from '@wordpress/data';
import App from './App';

const AppContainer = ({ todos, addTodo }) => {
  if (!todos || !addTodo) {
    return null; // or some loading state
  }
  return <App todos={todos} addTodo={addTodo} />;
};

export default withSelect((select) => {
  const todoStore = select('todo');
  return {
    todos: todoStore ? todoStore.getTodos() : null,
  };
})(withDispatch((dispatch) => {
  const todoStore = dispatch('todo');
  return {
    addTodo: todoStore ? todoStore.addTodo : null,
  };
})(AppContainer));