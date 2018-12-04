import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Hello from "./containers/Hello";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { EnthusiasmAction } from "./actions/index";
import { enthusiasm } from "./reducers/index";
import { StoreState } from "./types/index";
const store = createStore<StoreState,EnthusiasmAction,any,any>(enthusiasm, {enthusiasmLevel: 1,languageName: 'TypeScript'});
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
