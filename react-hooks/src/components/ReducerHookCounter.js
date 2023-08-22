import React from "react";

const initialState = 0;
const reducer = (prevState, action) => {
  switch (action) {
    case "increment":
      return prevState + 1;
    case "decrement":
      return prevState - 1;
    case "reset":
      return initialState;
    default:
      return prevState;
  }
};
export default function ReducerHookCounter() {
  /**
   * useReducer accepts reducer function, initial state and returns state and dispatch function
   * call dispatch function with action as parameter to execute state change
   * it is a primitive implementation of useState hook. useState makes use of useReducer implementation
   */
  const [count, dispatch] = React.useReducer(reducer, initialState);
  /**
   * useReducer over useState hook
   * 1. in case state is object or array
   * 2. state details are related to each other (state object is organized better through dispatch actions and reducers)
   * 3. too many state transitions are present
   * 4. business logic is complex
   * 5. manage global state instead of local component state
   */
  return (
    <div className="reducer-container">
      <p>Reducer Container</p>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("increment")}>+</button>
    </div>
  );
}
