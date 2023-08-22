import React from "react";

function CallbackHookCounter() {
  const [age, setAge] = React.useState(25);
  function incrementAge() {
    setAge((age) => age + 1);
  }
  // cache the callback function itself
  // callback function is changed only when dependencies are changed
  const callbackAge = React.useCallback(() => incrementAge(), []);
  const [salary, setSalary] = React.useState(10000);
  function incrementSalary() {
    setSalary((salary) => salary + 1000);
  }
  const callbackSalary = React.useCallback(() => incrementSalary(), []);
  return (
    <div className="callback-container">
      <p>Callback Hook Counter</p>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={callbackAge}>Increment age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={callbackSalary}>Increment salary</Button>
    </div>
  );
}

// render component only when state or props have changed
const Title = React.memo(() => {
  console.log("Rendering title");
  return <p>Counter</p>;
});
const Count = React.memo(({ text, count }) => {
  console.log("Rendering count", text, count);
  return (
    <p>
      {text}: {count}
    </p>
  );
});
const Button = React.memo(({ handleClick, children }) => {
  console.log("Rendering button", handleClick);
  return <button onClick={handleClick}>{children}</button>;
});

export default CallbackHookCounter;
