import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


import "./index.scss";
import App from "./components/App";
import fetchQuoteReducer from "./reducers";

// setup redux extention https://github.com/zalmoxisus/redux-devtools-extension#usage (1.2  Advanced store setup)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(fetchQuoteReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
