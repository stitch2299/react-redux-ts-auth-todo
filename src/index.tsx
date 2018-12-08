import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from "redux";
import './index.css';
import { Provider } from 'react-redux';
import { StoreState } from "./types/index";
import { CountAction } from "./actions/index";
import { reducer } from "./reducers/index";
import App from "./containers/App";

const initialState ={
  count: 0,
  reseted: 0
}
const store = createStore<StoreState,CountAction,any,any>(reducer,initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
