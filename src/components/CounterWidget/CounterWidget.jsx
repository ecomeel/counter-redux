export function CounterWidget({
    counter,
    isLoading,
    isError,
    isSaveSuccess,
    isSaveLoading,
    isSaveError,
    onIncrementBtnClick,
    onDecrementBtnClick,
    onResetBtnClick,
    onRetryBtnClick,
    onSaveBtnClick
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
                <button onClick={onRetryBtnClick}>Повторить загрузку</button>
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
            <button disabled={isSaveLoading} onClick={onSaveBtnClick}>
                save
            </button>
            {isSaveLoading && <p>Saving counter</p>}
            {isSaveError && <p>Error save</p>}
            {isSaveSuccess && <p>Success save</p>}
        </div>
    );
}
