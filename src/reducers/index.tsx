import { CountAction, TypeDoubleAddCount } from "../actions/index";
import { StoreState } from "../types/index";
import { ADD_COUNT, SUB_COUNT, DOUBLE_ADD_COUNT, RESET_COUNT} from "../constants/index";

export const reducer = (state: StoreState, action: CountAction ): StoreState => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: state.count + 1 };
    case SUB_COUNT:
      return { ...state, count: state.count - 1 };
    case DOUBLE_ADD_COUNT:
      const doubleAddCountAction = action as TypeDoubleAddCount;
      const num = doubleAddCountAction.payload.num;
      return { ...state, count: state.count + num*2 };
    case RESET_COUNT:
      return { ...state, count:0, reseted: state.reseted + 1};
  }
  return state;
}
