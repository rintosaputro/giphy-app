import { useDispatch } from "react-redux";
import HeaderText from "../components/HeaderText";
import ListGift from "../components/ListGift";
import { useEffect } from "react";
import { asyncReceiveIronMans } from "../states/ironMan/action";
import { AppDispatch } from "../states";

const IronManPage = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveIronMans());
  }, [dispatch]);

  return (
    <main className="container p-10 max-w-7xl m-auto">
      <HeaderText>IRON MAN GIPHY</HeaderText>
      <ListGift page="ironMan" />
    </main>
  );
};

export default IronManPage;
