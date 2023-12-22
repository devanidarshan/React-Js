import React from "react";
import buyCake from "./Redux/Cake/Action";
import { buyPastry } from "./Redux/Cake/Action";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <>
      <div>
        <h2 className="font-semibold text-4xl">
          Number of Cakes - {props.numOfCakes}
        </h2>
        <button className="button" onClick={props.buyCake}>
          Buy Cake
        </button>
      </div>

      <div>
        <h2 className="font-semibold text-4xl">
          Number of Pastries - {props.numOfPastry}
        </h2>
        <button className="button" onClick={props.buyPastry}>
          Buy Pastry
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
    numOfPastry: state.numOfPastry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyPastry: () => dispatch(buyPastry()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
