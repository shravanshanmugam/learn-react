import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// Action type
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action creator - function returning an action
const request = () => {
    // Action
    return {
        type: FETCH_USERS_REQUEST
    }
}

const success = users => {
    // Action
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const failure = error => {
    // Action
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const initialState = {
    loading: false,
    users: [],
    error: ''
};

// Reducer takes current state and action to execute the state change
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;
    }
}

// async action creator
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(request())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => dispatch(success(response.data.map(user=>user.name))))
            .catch(error => dispatch(failure(error.message)))
    }
}

// create Redux store by initializing with Reducer
const store = legacy_createStore(reducer, initialState, applyMiddleware(thunk.default));
console.log('Initial state', store.getState());

// call back function whenever state is updated in Redux store. Return function will be the unsubscribe method
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState())
});

// state change happens when invoking action to store
store.dispatch(fetchUsers());

// unsubscribing here will stop calling the call back function since update happens asynchronously
// unsubscribe();