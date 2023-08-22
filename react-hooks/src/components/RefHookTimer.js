import React from "react";

function RefHookTimer() {
  const [timer, setTimer] = React.useState(0);
  const buttonRef = React.useRef(null);
  React.useEffect(() => {
    /**
     * assign setInterval function to button reference object
     * we can assign to a variable but it will not be accessible outside of useEffect hook
     * this way we can set objects to element reference and use as mutable state through re-renders
     * reference object value stays same even when component is re-render because of other state transition
     * changing reference object value will not re-render the component
     */
    buttonRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(buttonRef.current);
  }, []);
  return (
    <div className="ref-timer-container">
      <p>Ref Hook Timer</p>
      <p>Passed {timer} seconds</p>
      {/**
       * setInterval function would be undefined here if assigned as variable inside useEffect hook
       * instead we attach buttonReference object which has reference to setInterval function
       */}
      <button onClick={() => clearInterval(buttonRef.current)} ref={buttonRef}>
        Stop timer!
      </button>
    </div>
  );
}

export default RefHookTimer;
