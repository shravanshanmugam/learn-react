import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer() {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    // thunk middleware is not really used here since we are directly calling the async action
    fetchUsers(dispatch);
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => fetchUsers(dispatch)}>Fetch users!</button>

      <div>
        {userData.loading
          ? "Loading users..."
          : userData.users.length
          ? userData.users.map((userName) => <p key={userName}>{userName}</p>)
          : userData.error}
      </div>
    </div>
  );
}

export default UserContainer;
