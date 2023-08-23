import React from "react";
import useInput from "../hooks/useInput";

function CustomHookFormInput() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}!`);
    resetFirstName();
    resetLastName();
  }
  return (
    <div className="sub-container">
      <p>Custom Hook Form Input</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlForm="first-name">First name: </label>
          <input id="first-name" type="text" {...bindFirstName} />
        </div>
        <div>
          <label htmlForm="last-name">Last name: </label>
          <input id="last-name" type="text" {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CustomHookFormInput;
