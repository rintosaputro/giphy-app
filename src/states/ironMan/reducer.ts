import { ActionType } from "./action";
import { ActionType as ActionTypeLoading } from "../loading/action";

const initialState = {
  isLoading: true,
  data: [],
};

const ironMansReducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case ActionTypeLoading.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.RECEIVE_IRON_MANS:
      return {
        ...state,
        data: action.payload.ironMans,
      };
    case ActionTypeLoading.END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default ironMansReducer;
