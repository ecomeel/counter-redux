import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./pages/counter/reducer.js";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CounterPage from "./pages/counter/CounterPage.jsx";
import thunkMiddleware from "redux-thunk";

import "./api/mock-server.js";

const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <CounterPage />
        </Provider>
    </React.StrictMode>
);
