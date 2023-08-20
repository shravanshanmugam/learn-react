import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const [number, setNumber] = React.useState(0);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice cream: {numOfIceCream}</h2>
      <label htmlFor="number-of-icecream">How many do you want to buy?</label>
      <input
        type="text"
        id="number-of-icecream"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyIceCream(number))}>
        Buy Ice Cream
      </button>
      <p>Buying {number} ice cream</p>
    </div>
  );
}

export default IceCreamContainer;
