export const getCounterSelector = (state) => state.counter.value;
export const getIsLoadingSelector = (state) => state.counter.isLoading;
export const getIsErrorSelector = (state) => state.counter.isError;
export const getIsSaveLoading = (state) => state.counter.isSaveLoading;
export const getIsSaveError = (state) => state.counter.isSaveError;
export const getIsSaveSuccess = (state) => state.counter.isSaveSuccess;