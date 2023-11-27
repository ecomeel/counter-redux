import { useSelector } from "react-redux"

const getCounterValue = (state) => state.value

export default function App() {
    const counter = useSelector(getCounterValue)
    return (
        <h1>{counter}</h1>
    )
}