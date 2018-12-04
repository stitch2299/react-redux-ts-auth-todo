import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from "redux";
import './index.css';
//import { Provider } from 'react-redux';
import { StoreState } from "./types/index";
import { CountAction } from "./actions/index";
import { reducer } from "./reducers/index";
import Counter from "./components/Counter";

const initialState ={
  count: 0,
  reseted: 0
}
const store = createStore<StoreState,CountAction,any,any>(reducer,initialState);
console.log(store);

ReactDOM.render(
  <Counter count={100} />,
  document.getElementById('root') as HTMLElement
);
