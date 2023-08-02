import { ActionType } from "./action";
import { ActionType as ActionTypeLoading } from "../loading/action";

const initialState = {
  isLoading: true,
  data: [],
};

const searchResultReducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case ActionTypeLoading.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.RECEIVE_SEARCH_RESULT:
      return {
        ...state,
        data: action.payload.searchResult,
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

export default searchResultReducer;
