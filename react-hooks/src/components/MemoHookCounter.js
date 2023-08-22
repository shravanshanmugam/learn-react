import React from "react";

function MemoHookCounter() {
  const [startSlowCounter, setStartSlowCounter] = React.useState(false);
  const [counterOne, setCounterOne] = React.useState(0);
  const [counterTwo, setCounterTwo] = React.useState(0);
  // cache the result
  // memoized function is changed only when result changes
  const isEven = React.useMemo(() => {
    let i = 0;
    while (i < 2_000_000_000) i++;
    return counterOne % 2 === 0 ? "Even" : "Odd";
  }, [counterOne]);
  return (
    <div className="memo-counter">
      <p>Memo Hook Counter</p>
      <div>
        <button onClick={() => setStartSlowCounter(true)}>
          Start slow counter
        </button>
        {startSlowCounter && (
          <>
            <button onClick={() => setCounterOne(counterOne + 1)}>
              Increment slow counter {counterOne}
            </button>
            <span>{isEven}</span>
          </>
        )}
      </div>
      <div>
        <button onClick={() => setCounterTwo(counterTwo + 1)}>
          Increment fast counter {counterTwo}
        </button>
        <span>{counterTwo % 2 === 0 ? "Even" : "Odd"}</span>
      </div>
    </div>
  );
}

export default MemoHookCounter;
