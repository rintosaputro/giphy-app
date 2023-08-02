import { AppDispatch } from "..";
import api from "../../utils/api";
import { GiphyDataInterface } from "../../utils/interfaces";
import { startLoadingCreator, endLoadingCreator } from "../loading/action";

const ActionType = {
  RECEIVE_IRON_MANS: "RECEIVE_IRON_MANS",
};

const receiveIronMansCreator = (ironMans: GiphyDataInterface[]) => ({
  type: ActionType.RECEIVE_IRON_MANS,
  payload: { ironMans },
});

const asyncReceiveIronMans = () => async (dispatch: AppDispatch) => {
  dispatch(startLoadingCreator());
  try {
    const ironMans = await api.getIronMans();
    dispatch(receiveIronMansCreator(ironMans));
  } catch (err: any) {
    alert(err.msg);
  } finally {
    dispatch(endLoadingCreator());
  }
};

export { ActionType, receiveIronMansCreator, asyncReceiveIronMans };
