import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./reducer/login.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { fetchFeedsReducer } from "./reducer/fetchFeeds.reducer";
import { fetchSuggestionsReducer } from "./reducer/fetchSuggestions.reducer";
const rootReducer = combineReducers({
  login: loginReducer,
  feeds: fetchFeedsReducer,
  suggestions: fetchSuggestionsReducer
});
const middleWare = [logger, thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleWare));
