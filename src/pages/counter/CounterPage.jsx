import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
    getCounterSelector,
    getIsLoadingSelector,
    getIsErrorSelector,
    getIsSaveError,
    getIsSaveLoading,
    getIsSaveSuccess,
} from "./selectors";
import { increment, decrement, reset, load, save } from "./actions";
import { CounterWidget } from "../../components/CounterWidget/CounterWidget";

export default function CounterPage() {
    const counter = useSelector(getCounterSelector);
    const isLoading = useSelector(getIsLoadingSelector);
    const isError = useSelector(getIsErrorSelector);
    const isSaveLoading = useSelector(getIsSaveLoading);
    const isSaveError = useSelector(getIsSaveError);
    const isSaveSuccess = useSelector(getIsSaveSuccess);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(load());
    }, []);

    function handleDecrementButtonClick() {
        dispatch(decrement());
    }

    function handleIncrementButtonClick() {
        dispatch(increment());
    }
    function handleResetButtonClick() {
        dispatch(reset());
    }
    function handleRetryButtonClick() {
        dispatch(load());
    }

    function handleSaveBtnClick() {
        dispatch(save(counter))
    }
    return (
        <div>
            <CounterWidget
                counter={counter}
                isLoading={isLoading}
                isError={isError}
                isSaveLoading={isSaveLoading}
                isSaveError={isSaveError}
                isSaveSuccess={isSaveSuccess}
                onIncrementBtnClick={handleIncrementButtonClick}
                onDecrementBtnClick={handleDecrementButtonClick}
                onResetBtnClick={handleResetButtonClick}
                onRetryBtnClick={handleRetryButtonClick}
                onSaveBtnClick={handleSaveBtnClick}
            />
        </div>
    );
}
