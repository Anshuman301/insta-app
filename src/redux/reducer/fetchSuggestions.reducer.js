const init = {
  loading: false,
  data: null,
  error: undefined
};

export const fetchSuggestionsReducer = (state = init, action) => {
  switch (action.type) {
    case "FETCH_SUGGESTIONS_START":
      return { ...state, loading: true };
    case "FETCH_SUGGESTIONS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_SUGGESTIONS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
