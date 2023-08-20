import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
