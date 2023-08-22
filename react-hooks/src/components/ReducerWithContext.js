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

const CounterContext = React.createContext();
function ReducerWithContext() {
  const [count, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="reducer-context-container">
      <p>Reducer with context</p>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("increment")}>+</button>
      <div className="context-provider">
        <CounterContext.Provider value={{ count, dispatch }}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </CounterContext.Provider>
      </div>
    </div>
  );
}

function ComponentA() {
  const { count, dispatch } = React.useContext(CounterContext);
  return (
    <div className="component component-a">
      <p>Component A {count}</p>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("increment")}>+</button>
    </div>
  );
}

function ComponentB() {
  return (
    <div className="component component-b">
      <p>Component B</p>
      <ComponentD />
    </div>
  );
}

function ComponentC() {
  return (
    <div className="component component-c">
      <p>Component C</p>
      <ComponentE />
    </div>
  );
}

function ComponentD() {
  const { count } = React.useContext(CounterContext);
  return (
    <div className="component component-d">
      <p>Component D {count}</p>
    </div>
  );
}

function ComponentE() {
  return (
    <div className="component component-e">
      <p>Component E</p>
      <ComponentF />
    </div>
  );
}

function ComponentF() {
  const { count } = React.useContext(CounterContext);
  return (
    <div className="component component-f">
      <p>Component F {count}</p>
    </div>
  );
}

export default ReducerWithContext;
