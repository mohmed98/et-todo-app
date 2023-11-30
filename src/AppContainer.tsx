import React, { FC } from 'react';
import { useDispatch, useSelect } from '@wordpress/data';
import { store } from './data/TodoStore';
import App from './App';



const AppContainer: FC = () => {
  const todos = useSelect((select) => select(store).getTodos(), []);
  const { addTodo } = useDispatch(store);

  if (!todos || !addTodo) {
    return null; 
  }

  return <App todos={todos} addTodo={addTodo} />;
};

export default AppContainer;