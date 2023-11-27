import { useDispatch, useSelector } from "react-redux";

import { getCounterSelector } from "./selectors";
import { increment, decrement, reset } from "./actions";
import {CounterWidget} from "../../components/CounterWidget/CounterWidget";

export default function CounterPage() {
    const counter = useSelector(getCounterSelector);
    const dispatch = useDispatch();

    function handleDecrementButton() {
        dispatch(decrement());
    }

    function handleIncrementButton() {
        dispatch(increment());
    }
    function hadnleResetButton() {
        dispatch(reset())
    }

    return (
        <div>
            <CounterWidget
                counter={counter}
                onIncrementBtnClick={handleIncrementButton}
                onDecrementBtnClick={handleDecrementButton}
                onResetBtnClick={hadnleResetButton}
            />
        </div>
    );
}
