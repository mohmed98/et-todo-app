import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppContainer from './AppContainer';

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);
appRoot.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);

