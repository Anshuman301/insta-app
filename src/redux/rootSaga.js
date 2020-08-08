import { all, call } from "redux-saga/effects";
import { watchFetchFeeds } from "./sagas/fetchFeeds.saga";
import { watchFetchSuggestion } from "./sagas/fetchSuggestion.saga";

export function* rootSaga() {
  yield all([call(watchFetchFeeds), call(watchFetchSuggestion)]);
}
