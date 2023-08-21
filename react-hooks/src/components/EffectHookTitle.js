import React from "react";

export default function EffectHook() {
  const [count, setCount] = React.useState(0);
  const [timer, setTimer] = React.useState(0);
  React.useEffect(() => {
    document.title = `Click ${count} times`;
  }, [count]);
  function tick() {
    setTimer((timer) => timer + 1);
  }
  React.useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <div>
      <div className="effect-container">
        <button onClick={() => setCount(count + 1)}>
          Click me to change document title!
        </button>
        <p>Clicked {count} times</p>
      </div>
      <div className="timer-container">
        <p>Passed {timer} seconds</p>
      </div>
    </div>
  );
}
