import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

// use state and component props to map to props
const mapStateToProps = (state, ownProps) => {
  return {
    numOfCakes: ownProps.showCount
      ? state.cake.numOfCakes
      : "You are not allowed to see number of cakes",
  };
};

// use state and component props to map to props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// pass null as first parameter if not required to map state to props
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
