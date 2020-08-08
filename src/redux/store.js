import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./reducer/login.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleWare from "redux-saga";
import { fetchFeedsReducer } from "./reducer/fetchFeeds.reducer";
import { fetchSuggestionsReducer } from "./reducer/fetchSuggestions.reducer";
import { rootSaga } from "./rootSaga";
const rootReducer = combineReducers({
  login: loginReducer,
  feeds: fetchFeedsReducer,
  suggestions: fetchSuggestionsReducer
});
const saga = createSagaMiddleWare();
const middleWare = [logger, thunk, saga];
export const store = createStore(rootReducer, applyMiddleware(...middleWare));
saga.run(rootSaga);
