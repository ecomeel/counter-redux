import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getCounterSelector, getIsLoadingSelector, getIsErrorSelector } from "./selectors";
import { increment, decrement, reset, load } from "./actions";
import { CounterWidget } from "../../components/CounterWidget/CounterWidget";

export default function CounterPage() {
    const counter = useSelector(getCounterSelector);
    const isLoading = useSelector(getIsLoadingSelector);
    const isError = useSelector(getIsErrorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(load())
    }, []);

    function handleDecrementButton() {
        dispatch(decrement());
    }

    function handleIncrementButton() {
        dispatch(increment());
    }
    function handleResetButton() {
        dispatch(reset());
    }

    return (
        <div>
            <CounterWidget
                counter={counter}
                isLoading={isLoading}
                isError={isError}
                onIncrementBtnClick={handleIncrementButton}
                onDecrementBtnClick={handleDecrementButton}
                onResetBtnClick={handleResetButton}
            />
        </div>
    );
}
