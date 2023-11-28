import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import CounterPage from "./pages/counter/CounterPage.jsx";
import { counterReducer } from "./pages/counter/reducer.js";

import "./api/server.js";

const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <CounterPage />
    </Provider>
);
