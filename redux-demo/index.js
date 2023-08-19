console.log('Learn Redux!')
const redux = require('redux');

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

// create Redux store by initializing with Reducer
const store = redux.legacy_createStore(buyCakeReducer);
console.log('Initial state', store.getState());

// call back function whenever state is updated in Redux store. Return function will be the unsubscribe method
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState())
});

// state change happens when invoking action to store
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());

// unsubscribe will stop calling the call back function whenever state is updated
unsubscribe();

store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());

console.log('Final state', store.getState());