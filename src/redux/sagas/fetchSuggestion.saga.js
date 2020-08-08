import { takeLatest, put, call } from "redux-saga/effects";
import Axios from "axios";
import {
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure
} from "../action/fetchSuggestions.action";
//worker functions
function* workerFetchSuggestion() {
  try {
    const resp = yield call(
      Axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(fetchSuggestionsSuccess(resp.data));
  } catch (e) {
    yield put(fetchSuggestionsFailure(e.message));
  }
}

//Watcher function
export function* watchFetchSuggestion() {
  yield takeLatest("FETCH_SUGGESTIONS_START", workerFetchSuggestion);
}
