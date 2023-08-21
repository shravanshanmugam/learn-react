import React from "react";

export default function EffectHook() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = `Click ${count} times`;
  }, [count]);
  return (
    <div className="effect-container">
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <p>Clicked {count} times</p>
    </div>
  );
}
