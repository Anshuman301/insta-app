const init = {
  loading: false,
  data: null,
  error: undefined
};

export const fetchFeedsReducer = (state = init, action) => {
  switch (action.type) {
    case "FETCH_FEEDS_START":
      return { ...state, loading: true };
    case "FETCH_FEEDS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FEEDS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
