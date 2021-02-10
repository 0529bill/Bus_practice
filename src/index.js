import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import combineReducers from '@Reducers/combineReducers'
import App from './App';

console.log(`
----------------------------------------------------------
hi this is water
welcome to my project
----------------------------------------------------------
                                                                                                                                                                                                                          
`)




ReactDOM.render(
  <Provider store={combineReducers} >
    <App />
  </Provider>,

  document.getElementById('root')
);
