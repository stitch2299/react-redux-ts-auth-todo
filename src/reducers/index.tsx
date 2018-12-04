import { CountAction } from "../actions/index";
import { StoreState } from "../types/index";
import { ADD_COUNT, SUB_COUNT, DOUBLE_ADD_COUNT } from "../constants/index";

export const reducer = (state: StoreState, action: CountAction ): StoreState => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: state.count + 1 };
    case SUB_COUNT:
      return { ...state, count: state.count - 1 };
    case DOUBLE_ADD_COUNT:
      const num = action.payload.num;
      return { ...state, count: state.count + num*2 };
  }
  return state;
}
