import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';
import * as serviceWorker from './serviceWorker';
import './static/css/common.css'
import './static/css/reset.css'
import 'antd-mobile/dist/antd-mobile.css';
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 
serviceWorker.unregister();
