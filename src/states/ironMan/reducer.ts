import { GiphyDataInterface } from "../../utils/interfaces";
import { ActionType } from "./action";

interface ActionInterface {
  type: string;
  payload: {
    ironMans: GiphyDataInterface[];
  };
}

const ironMansReducer = (ironMans = [], action: ActionInterface) => {
  switch (action.type) {
    case ActionType.RECEIVE_IRON_MANS:
      return action.payload.ironMans;
    default:
      return ironMans;
  }
};

export default ironMansReducer;
