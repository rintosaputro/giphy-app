import { AppDispatch } from "..";
import api from "../../utils/api";
import { GiphyDataInterface } from "../../utils/interfaces";
import { endLoadingCreator, startLoadingCreator } from "../loading/action";

const ActionType = {
  RECEIVE_SEARCH_RESULT: "RECEIVE_SEARCH_RESULT",
};

const receiveSearchResultCreator = (searchResult: GiphyDataInterface[]) => ({
  type: ActionType.RECEIVE_SEARCH_RESULT,
  payload: { searchResult },
});

const asyncReceiveSearchResult =
  (keyword: string) => async (dispatch: AppDispatch) => {
    dispatch(startLoadingCreator());
    try {
      const searchResult = await api.searchGiphy(keyword);
      dispatch(receiveSearchResultCreator(searchResult));
    } catch (err: any) {
      alert(err.msg);
    } finally {
      dispatch(endLoadingCreator());
    }
  };

export { ActionType, receiveSearchResultCreator, asyncReceiveSearchResult };
