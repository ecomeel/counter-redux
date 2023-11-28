import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_RESET,
    COUNTER_LOADING,
    COUNTER_LOADING_SUCCESS,
    COUNTER_LOADING_ERROR,
} from "./constants";

import { API } from "./api";

export const load = () => {
    return (dispatch) => {
        dispatch({
            type: COUNTER_LOADING,
        });

        API.getCounter()
            .then((data) => {
                dispatch({
                    type: COUNTER_LOADING_SUCCESS,
                    payload: data.counter,
                });
            })
            .catch((error) => {
                dispatch({
                    type: COUNTER_LOADING_ERROR,
                });
            });
    };
};

export const increment = () => {
    return {
        type: COUNTER_INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: COUNTER_DECREMENT,
    };
};

export const reset = () => {
    return {
        type: COUNTER_RESET,
    };
};
