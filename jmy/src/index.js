import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import "./assets/js/font"; //全局自执行js
import "./assets/css/base.css";
import "./assets/font_58s6xfeugmu6jemi/iconfont.css";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "./store/reducer";
import state from "./store/state";
import App from "./components/App";
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

const store = createStore(reducer,state);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


