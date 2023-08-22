import React from "react";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
function request() {
  return {
    type: "request",
  };
}
function success(users) {
  return {
    type: "success",
    payload: users,
  };
}
function failure(error) {
  return {
    type: "failure",
    payload: error,
  };
}
const reducer = (state, action) => {
  switch (action.type) {
    case "request":
      return { ...state, loading: true };
    case "success":
      return { ...state, users: action.payload, error: "", loading: false };
    case "failure":
      return { ...state, users: [], error: action.payload, loading: false };
    default:
      return state;
  }
};
export default function FetchDataWithReducer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  function fetchUsers() {
    dispatch(request());
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) =>
          dispatch(success(response.data.map((user) => user.name)))
        )
        .catch((error) => dispatch(failure(error.message)));
    }, 1000);
  }
  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="fetch-data-with-reducer">
      <p>Fetch data with reducer</p>
      <button onClick={fetchUsers}>Fetch users</button>
      <div>
        {state.loading ? (
          <p>Loading users</p>
        ) : state.error.length > 0 ? (
          <p>{state.error}</p>
        ) : (
          <div>
            {state.users.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
