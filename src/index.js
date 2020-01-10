import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import Currencies from "./Currencies";
import { InitialState } from "./Constants.js";
import thunk from "redux-thunk";
import { HashRouter, Route } from "react-router-dom";
import ConfigComponent from "./ConfigComponent";
import NavBarComponent from "./NavBarComponent";

const store = createStore(reducers, InitialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <NavBarComponent></NavBarComponent>
    <HashRouter>
      <Route exact path="/" component={Currencies} />
      <Route path="/Config" component={ConfigComponent} />
      <Route path="/Currencies" component={Currencies} />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
