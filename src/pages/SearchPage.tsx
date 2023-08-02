import { useEffect } from "react";
import HeaderText from "../components/HeaderText";
import ListGift from "../components/ListGift";
import TextField from "../components/TextField";
import { AppDispatch, RootState } from "../states";
import useInput from "../utils/useInput";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveSearchResult } from "../states/search/action";

const SearchPage = () => {
  const { value: keyword, handleChange: onChangeSearch } = useInput("");

  const searchResult = useSelector((state: RootState) => state.searchResult);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveSearchResult(keyword));
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchResult.data.length > 0) {
        dispatch(asyncReceiveSearchResult(keyword));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <main className="container p-10 max-w-7xl m-auto">
      <HeaderText>SEARCH YOUR GIPHY</HeaderText>
      <div className="flex justify-center mt-14">
        <TextField
          placeholder="Search Giphy"
          value={keyword}
          onChange={onChangeSearch}
        />
      </div>
      <ListGift page="search" />
    </main>
  );
};

export default SearchPage;
