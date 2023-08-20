import { legacy_createStore } from "redux";
import cakeReducer from "./cake/CakeReducer";

const store = legacy_createStore(cakeReducer);
store.subscribe(() => console.log("Updated state", store.getState()));

export default store;
