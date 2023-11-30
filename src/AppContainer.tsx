import React, { FC } from 'react';
import { useSelect } from '@wordpress/data';
import { store } from './data/TodoStore';
import App from './App';



const AppContainer: FC = () => {
  const todos = useSelect((select) => select(store).getTodos(), []);

  if (!todos) {
    return null; 
  }

  return <App todos={todos}/>;
};

export default AppContainer;