import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./UserTypes";

const request = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const success = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const failure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = (dispatch) => {
  dispatch(request());
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const userNames = response.data.map((user) => user.name);
      dispatch(success(userNames));
    })
    .catch((error) => {
      dispatch(failure(error.message));
    });
};
