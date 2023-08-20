import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream:
          state.numOfIceCream - action.payload >= 0
            ? state.numOfIceCream - action.payload
            : state.numOfIceCream,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
