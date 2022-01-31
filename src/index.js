import React from 'react';
import ReactDOM from 'react-dom';
import { HerosApp } from './HerosApp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <HerosApp />
  </React.StrictMode>,
  document.getElementById('root')
);

