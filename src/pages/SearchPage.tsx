import HeaderText from "../components/HeaderText";
import ListGift from "../components/ListGift";
import TextField from "../components/TextField";
import useInput from "../utils/useInput";

const SearchPage = () => {
  const { value: search, handleChange: onChangeSearch } = useInput("");
  console.log("response", search);
  return (
    <main className="container p-10 max-w-7xl m-auto">
      <HeaderText>SEARCH YOUR GIPHY</HeaderText>
      <form className="flex justify-center mt-14">
        <TextField
          placeholder="Search Giphy"
          value={search}
          onChange={onChangeSearch}
        />
      </form>
      <ListGift />
    </main>
  );
};

export default SearchPage;
