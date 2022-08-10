import React from 'react';
import logo from './logo.svg';
import './App.css';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import MainContainer from './components/MainContainer/MainContainer'


const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  )
}

export default App;
