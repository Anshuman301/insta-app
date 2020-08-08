import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchFeedsFailure,
  fetchFeedsSuccess
} from "../action/fetchFeeds.action";
import Axios from "axios";

//worker functions
function* workerFetchFeeds() {
  try {
    const resp = yield call(Axios.get, "https://picsum.photos/v2/list");
    yield put(fetchFeedsSuccess(resp.data));
  } catch (e) {
    yield put(fetchFeedsFailure(e.message));
  }
}

//Watcher function
export function* watchFetchFeeds() {
  yield takeLatest("FETCH_FEEDS_START", workerFetchFeeds);
}
