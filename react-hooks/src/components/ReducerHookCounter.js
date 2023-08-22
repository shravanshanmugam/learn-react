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
  const [count, dispatch] = React.useReducer(reducer, initialState);
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
