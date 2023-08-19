import { legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Action type
const BUY_CAKE = "BUY_CAKE";

// Action creator - function returning an action
const buyCakeAction = () => {
    // Action
    return {
        type: BUY_CAKE,
        info: 'buying a cake'
    }
}

const initialState = {
    numOfCakes: 10
};

// Reducer takes current state and action to execute the state change
const buyCakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
}

// create Redux store by initializing with Reducer. Also set initial state and apply middleware in the store
const store = legacy_createStore(buyCakeReducer, initialState, applyMiddleware(logger.createLogger()));
console.log('Initial state', store.getState());

// state change happens when invoking action to store
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());

console.log('Final state', store.getState());