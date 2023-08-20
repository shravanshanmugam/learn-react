import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numOfIceCream:
          state.numOfIceCream > 0
            ? state.numOfIceCream - 1
            : state.numOfIceCream,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
