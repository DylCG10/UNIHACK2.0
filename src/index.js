import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';



import MovieList from './movieList';
import MovieQuiz from './movieQuiz';
import Login from './login/index.js';

import createSagaMiddleware from 'redux-saga'


import IndexReducer from './index-reducer';
import IndexSagas from './index-sagas';

import Firebase, { FirebaseContext } from './firebase';


const browserHistory = createBrowserHistory();


const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&  
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  IndexReducer, 
  composeSetup(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(IndexSagas);



ReactDOM.render(
  <Provider store={store}>
    {/* <FirebaseContext.Provider value={new Firebase()}> */}

      <Router history = {browserHistory}>
        <Route path='/' exact component={Login} />
        <Route path = '/moviequiz' exact component = {MovieQuiz} />
        <Route path = '/movielist' exact component = {MovieList} />

        </Router>
      {/* </FirebaseContext.Provider>, */}

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
