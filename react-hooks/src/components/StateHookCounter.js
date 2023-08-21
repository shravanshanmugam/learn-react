import React from "react";
export default function StateHook() {
  const initialCount = 0;
  const [count, setCount] = React.useState(initialCount);
  const [userName, setUserName] = React.useState({
    firstName: "",
    lastName: "",
  });
  const [currentItem, setCurrentItem] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function changeItem(e) {
    setCurrentItem(e.target.value);
  }

  function addItem(e) {
    e.preventDefault();
    console.log("add item", currentItem);
    setItems((prevState) => [...prevState, currentItem]);
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
      <div>
        <form>
          <label htmlFor="item-name">Item name:</label>
          <input
            type="text"
            id="item-name"
            onChange={changeItem}
            value={currentItem}
          />
          <button onClick={addItem}>Add</button>
        </form>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
