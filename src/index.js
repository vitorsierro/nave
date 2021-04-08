import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'
import App from './App.js';
import { NaversContext } from './Contexts/NaversContext';

ReactDOM.render(
  <React.StrictMode>
  <NaversContext>
    <App />
  </NaversContext>
  </React.StrictMode>,
  document.getElementById('root')
);

