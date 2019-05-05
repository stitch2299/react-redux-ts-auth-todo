import * as React from "react";
import Counter from '../components/Counter';
import AddButton from "../components/AddButton";
import SubButton from "../components/SubButton";
import DoubleAddButton from "../components/DoubleAddButton";
import ResetButton from "../components/ResetButton";
import Title from "../components/Title";
import Line from "../components/Line";
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from  "redux";
import * as actions from "../actions/index";

export interface Props {
  count: number;
  reseted: number;
  addHandler: ()=>void;
  subHandler: ()=>void;
  doubleAddHandler: ()=>void;
  resetHandler: ()=>void;
}

const App = ( { count, reseted, addHandler, subHandler, doubleAddHandler, resetHandler }:Props) => {
  return(
    <div>
      <Title text={"todoapp"} />
      <Line />
      <Counter count={count} />
      <AddButton addHandler={addHandler} />
      <SubButton subHandler={subHandler} />
      <DoubleAddButton doubleAddHandler={doubleAddHandler} />
      <ResetButton resetHandler={resetHandler} />
    </div>
  )
}

const mapStateToProps = (state:StoreState) => {
  return {
    count: state.count,
    reseted: state.reseted
  }
}

const mapDispatchToProps = (dispatch:Dispatch<actions.CountAction>) => {
  return {
    addHandler: ()=>dispatch(actions.getAddCount()),
    subHandler: ()=>dispatch(actions.getSubCount()),
    doubleAddHandler: ()=>dispatch(actions.getDoubleAddCount(1)),
    resetHandler: ()=>dispatch(actions.getResetCount()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
