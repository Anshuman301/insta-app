import Axios from "axios";

export const fetchSuggestionsStart = () => ({
  type: "FETCH_SUGGESTIONS_START"
});

export const fetchSuggestionsSuccess = (feeds) => ({
  type: "FETCH_SUGGESTIONS_SUCCESS",
  payload: feeds
});

export const fetchSuggestionsFailure = (error) => ({
  type: "FETCH_SUGGESTIONS_FAILURE",
  payload: error
});

export const fetchSuggestionsAsync = () => async (dispatch) => {
  dispatch(fetchSuggestionsStart());
  try {
    const resp = await Axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(fetchSuggestionsSuccess(resp.data));
  } catch (e) {
    dispatch(fetchSuggestionsFailure(e.message));
  }
};
