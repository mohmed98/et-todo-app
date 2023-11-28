import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppContainer from './AppContainer';
import TodoActions from './data/TodoActions';
// eslint-disable-next-line no-unused-vars
import store from './data/TodoStore';

ReactDOM.render(
  <React.StrictMode>
      
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');