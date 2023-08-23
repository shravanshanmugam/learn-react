import React from "react";

export default function EffectHook() {
  const [count, setCount] = React.useState(0);
  const [timer, setTimer] = React.useState(0);
  // executes side effects whenever dependencies change
  // executes on first render since state is set for first time
  React.useEffect(() => {
    document.title = `Click ${count} times`;
  }, [count]);
  function tick() {
    setTimer((timer) => timer + 1);
  }
  // return function will get called when component is unmounted
  React.useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  // incase dependencies array is empty, executes side effects only on first render
  return (
    <div>
      <div className="sub-container">
        <p>Effect hook</p>
        <button onClick={() => setCount(count + 1)}>
          Click me to change document title!
        </button>
        <p>Clicked {count} times</p>
        <p>Passed {timer} seconds</p>
      </div>
    </div>
  );
}
