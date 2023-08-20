import { legacy_createStore, combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./iceCream/IceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = legacy_createStore(rootReducer);
store.subscribe(() => console.log("Updated state", store.getState()));

export default store;
