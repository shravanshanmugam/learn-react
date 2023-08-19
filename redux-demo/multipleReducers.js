import { combineReducers, legacy_createStore } from 'redux';

// Action type
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creator - function returning an action
const buyCakeAction = () => {
    // Action
    return {
        type: BUY_CAKE,
        info: 'buying a cake'
    }
}

const buyIceCreamAction = () => {
    return {
        type: BUY_ICECREAM,
        info: 'buying an ice-cream'
    }
}

const initialCakeState = {
    numOfCakes: 10
};
const initialIceCreamState = {
    numOfIceCreams: 20
};

// Reducer takes current state and action to execute the state change
const buyCakeReducer = (state = initialCakeState, action) => {
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

const buyIceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: buyCakeReducer,
    iceCream: buyIceCreamReducer
});
// create Redux store by initializing with Reducer
const store = legacy_createStore(rootReducer);
console.log('Initial state', store.getState());

// call back function whenever state is updated in Redux store. Return function will be the unsubscribe method
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState())
});

// state change happens when invoking action to store
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyIceCreamAction());
store.dispatch(buyIceCreamAction());
store.dispatch(buyCakeAction());

// unsubscribe will stop calling the call back function whenever state is updated
unsubscribe();
console.log('Final state', store.getState());