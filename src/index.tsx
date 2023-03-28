import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as personData from './FormStore2'
import {observable} from 'mobx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App person={observable(personData)}/>
  </React.StrictMode>
);
