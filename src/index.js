import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppContainer from './AppContainer';
import TodoActions from './data/TodoActions';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

