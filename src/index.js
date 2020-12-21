import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import Store from './redux/Store'

import {CssBaseline} from '@material-ui/core'
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

