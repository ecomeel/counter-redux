import { useDispatch, useSelector } from "react-redux";

const getCounterValue = (state) => state.value;

export default function App() {
    const counter = useSelector(getCounterValue);
    const dispatch = useDispatch();

    function handleDecrementButton() {
        dispatch({
            type: 'counter/decrement'
        })
    }

    function handleIncrementButton() {
        dispatch({
            type: 'counter/increment'
        })
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleIncrementButton}>+1</button>
            <button onClick={handleDecrementButton}>-1</button>
        </div>
    );
}
