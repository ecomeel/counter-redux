import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import CounterPage from './pages/counter/CounterPage.jsx'
import { counterReducer } from "./pages/counter/reducer.js";

const rootReducer = combineReducers({
    counter: counterReducer
})

const store = createStore(rootReducer, undefined, composeWithDevTools());

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <CounterPage />
    </Provider>
);
