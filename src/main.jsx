import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App.jsx";
import { counterReducer } from "./reducer.js";

const store = createStore(counterReducer);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <App />
    </Provider>
);
