import React from "react";
import buyCake from "./Redux/Cake/Action";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
    <h2 className="font-semibold text-4xl">Number of Cakes - {props.numOfCakes}</h2>
      <button className="button" onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = state =>{
  return{
       numOfCakes : state.numOfCakes
  }
}

const mapDispatchToProps = dispatch =>{
  return{
       buyCake : () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);
