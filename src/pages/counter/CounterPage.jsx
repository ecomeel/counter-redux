import { useSelector, useDispatch } from "react-redux";

import { getCounter } from "./selectors";
import { increment, decrement, reset } from "./actions";

import CounterWidget from "../../components/CounterWidget/CounterWidget";

function CounterPage() {
    const counter = useSelector(getCounter);
    const dispatch = useDispatch();

    const handleIncrementBtnClick = () => {
        dispatch(increment());
    };

    const handleDecrementBtnClick = () => {
        dispatch(decrement());
    };

    const handleResetBtnClick = () => {
        dispatch(reset())
    }

    return (
        <div>
            <CounterWidget
                counter={counter}
                onIncrementBtnClick={handleIncrementBtnClick}
                onDecrementBtnClick={handleDecrementBtnClick}
                onResetBtnClick={handleResetBtnClick}
            />
        </div>
    );
}

export default CounterPage;
