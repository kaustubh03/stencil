import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import { ConnectedRouter } from "connected-react-router";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import postReducer from "./redux/reducers";
import { PersistGate } from "redux-persist/integration/react";
import { history, persistor } from "./redux/store";
import configureStore from "./redux/configureStore";

//const store = createStore(postReducer);
const store = configureStore();
const target = document.querySelector("#root");
render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </div>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
