import { AppDispatch } from "..";
import api from "../../utils/api";
import { GiphyDataInterface } from "../../utils/interfaces";

const ActionType = {
  RECEIVE_IRON_MANS: "RECEIVE_IRON_MANS",
};

const receiveIronMansCreator = (ironMans: GiphyDataInterface[]) => ({
  type: ActionType.RECEIVE_IRON_MANS,
  payload: { ironMans },
});

const asyncReceiveIronMans = () => async (dispatch: AppDispatch) => {
  try {
    const ironMans = await api.getIronMans();
    dispatch(receiveIronMansCreator(ironMans));
  } catch (err: any) {
    alert(err.msg);
  }
};

export { ActionType, receiveIronMansCreator, asyncReceiveIronMans };
