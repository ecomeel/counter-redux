import { useSelector, useDispatch } from "react-redux";

import { getCounter } from "./selectors";
import { increment, decrement } from "./actions";

import CounterWidget from "../../components/CounterWidget/CounterWidget";

function App() {
    const counter = useSelector(getCounter);
    const dispatch = useDispatch();

    const handleIncrementBtnClick = () => {
        dispatch(increment());
    };

    const handleDecrementBtnClick = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <CounterWidget
                counter={counter}
                onIncrementBtnClick={handleIncrementBtnClick}
                onDecrementBtnClick={handleDecrementBtnClick}
            />
        </div>
    );
}

export default App;
