export function CounterWidget({
    counter,
    isLoading,
    onIncrementBtnClick,
    onDecrementBtnClick,
    onResetBtnClick
}) {
    return (
        <div>
            <p>{isLoading ? 'Loading...' : counter}</p>
            <button onClick={onIncrementBtnClick}>+1</button>
            <button onClick={onDecrementBtnClick}>-1</button>
            <button onClick={onResetBtnClick}>reset</button>
        </div>
    );
}
