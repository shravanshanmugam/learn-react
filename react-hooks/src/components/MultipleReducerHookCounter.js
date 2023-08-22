import React from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export default function MultipleReducerHookCounter() {
  const [count, dispatch] = React.useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = React.useReducer(reducer, initialState);
  return (
    <div className="reducer-container">
      <p>Reducer Container 1</p>
      <p>Count: {count.firstCounter}</p>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        +5
      </button>
      <p>Reducer Container 2</p>
      <p>Count: {countTwo.firstCounter}</p>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        +5
      </button>
    </div>
  );
}
