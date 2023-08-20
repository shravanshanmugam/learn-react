import { BUY_ICECREAM } from "./IceCreamTypes";

export const buyIceCream = (number = 0) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};
