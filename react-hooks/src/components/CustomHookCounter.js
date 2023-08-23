import React from "react";
import useCounter from "../hooks/useCounter";

function CustomHookCounter() {
  return (
    <div className="sub-container">
      <p>Custom Hook Counter</p>
      <div className="counter-container">
        <CounterOne />
        <CounterTwo />
        <CounterOne />
        <CounterTwo />
        <CounterOne />
      </div>
    </div>
  );
}

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div className="sub-inner-container">
      <p>Counter One: {count}</p>

      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div className="sub-inner-container">
      <p>Counter Two: {count}</p>

      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CustomHookCounter;
