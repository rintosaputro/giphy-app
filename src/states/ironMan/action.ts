import { AppDispatch } from "..";
import api from "../../utils/api";
import { GiphyDataInterface } from "../../utils/interfaces";

const ActionType = {
  RECEIVE_IRON_MANS: "RECEIVE_IRON_MANS",
  START_LOADING: "START_LOADING",
  END_LOADING: "END_LOADING",
};

const receiveIronMansCreator = (ironMans: GiphyDataInterface[]) => ({
  type: ActionType.RECEIVE_IRON_MANS,
  payload: { ironMans },
});

const startLoadingCreator = () => ({
  type: ActionType.START_LOADING,
});

const endLoadingCreator = () => ({
  type: ActionType.END_LOADING,
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
