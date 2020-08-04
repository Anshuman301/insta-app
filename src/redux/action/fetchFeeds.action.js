import Axios from "axios";

const fetchFeedsStart = () => ({
  type: "FETCH_FEEDS_START"
});

const fetchFeedsSuccess = feeds => ({
  type: "FETCH_FEEDS_SUCCESS",
  payload: feeds
});

const fetchFeedsFailure = error => ({
  type: "FETCH_FEEDS_FAILURE",
  payload: error
});

export const fetchFeedsAsync = () => async dispatch => {
  dispatch(fetchFeedsStart());
  try {
    const resp = await Axios.get("https://picsum.photos/v2/list");
    dispatch(fetchFeedsSuccess(resp.data));
  } catch (e) {
    dispatch(fetchFeedsFailure(e.message));
  }
};
