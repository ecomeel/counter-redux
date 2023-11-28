import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_RESET,
    COUNTER_LOADING,
    COUNTER_LOADING_SUCCESS,
    COUNTER_LOADING_ERROR,
} from "./constants";

const initialState = {
    value: 0,
    isLoading: false,
    isError: false,
};

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case COUNTER_DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };
        case COUNTER_RESET:
            return {
                ...state,
                value: initialState.value,
            };
        case COUNTER_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case COUNTER_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                value: action.payload,
            };
        case COUNTER_LOADING_ERROR:
            return {
                ...state,
                isLoading: true,
                isError: true,
            };
        default:
            return {
                ...state,
            };
    }
}
