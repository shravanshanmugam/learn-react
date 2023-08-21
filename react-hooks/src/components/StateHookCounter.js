import React from "react";
export default function StateHook() {
  const initialCount = 0;
  const [count, setCount] = React.useState(initialCount);
  const [userName, setUserName] = React.useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <br />
      <div>
        <form>
          <label htmlFor="first-name">First name:</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={handleChange}
            value={userName.firstName}
          />
          <label htmlFor="last-name">Last name:</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            onChange={handleChange}
            value={userName.lastName}
          />
        </form>

        <p>
          Hello {userName.firstName} {userName.lastName}!
        </p>
      </div>
    </div>
  );
}
