import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';


const store = configureStore();

ReactDOM.render(
  <Provider store ={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
    document.getElementById('app')
);



