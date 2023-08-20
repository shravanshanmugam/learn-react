import { applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer.js";

const store = legacy_createStore(rootReducer, {}, applyMiddleware(logger));

export default store;
