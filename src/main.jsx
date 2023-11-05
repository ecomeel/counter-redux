import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import { counterReducer } from "./pages/counter/reducer.js";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./pages/counter/Counter.jsx";

const rootReducer = combineReducers({
  counter: counterReducer
})

const store = createStore(rootReducer, undefined, composeWithDevTools());

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);