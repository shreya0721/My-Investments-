import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import theme from '../src/utils/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import rootReducer from './reducers/rootReducer';
import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

let store = createStore(rootReducer,compose(applyMiddleware(thunk))); //it provides a dispatch function to action

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
);
/*
CRACKED BY ILLUMINATI
TRUST US AND UNCOMMENT THIS CODE ONCE YOU SETUP YOUR REDUX STORE ;-)
 ReactDOM.render(
   <Provider store={store}>
     <MuiThemeProvider theme={theme}>
       <App />
     </MuiThemeProvider>
   </Provider>,
   document.getElementById('root')
 );
*/



