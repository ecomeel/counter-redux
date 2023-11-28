export function CounterWidget({
    counter,
    isLoading,
    isError,
    onIncrementBtnClick,
    onDecrementBtnClick,
    onResetBtnClick,
}) {
    if (isLoading) {
        return (
            <div>
                <p>Loading</p>
            </div>
        )
    }
    if (isError)  {
        return (
            <div>
                <p>Error loading</p>
            </div>
        )
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={onIncrementBtnClick}>
                +1
            </button>
            <button onClick={onDecrementBtnClick}>
                -1
            </button>
            <button onClick={onResetBtnClick}>
                reset
            </button>
        </div>
    );
}
