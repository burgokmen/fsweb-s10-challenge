import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { myReducer } from "./reducers";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  myReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </>
  </BrowserRouter>
);
