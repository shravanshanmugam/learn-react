import { legacy_createStore } from "redux";
import rootReducer from "./rootReducer";

const store = legacy_createStore(rootReducer);
store.subscribe(() => console.log("Updated state", store.getState()));

export default store;
