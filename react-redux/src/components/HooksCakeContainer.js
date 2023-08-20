import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  // selector hook to map state to props
  const numOfCakes = useSelector((state) => state.numOfCakes);
  // dispatch hook to call dispatch functions
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
