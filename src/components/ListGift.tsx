import CardGift from "./CardGift";
import { GiphyDataInterface } from "../utils/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../states";

const ListGift = () => {
  const { ironMan } = useSelector((state: RootState) => state);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-28">
      {ironMan.data.map((item: GiphyDataInterface, index: number) => (
        <CardGift assetImage={item.images.original.url} key={index} />
      ))}
    </section>
  );
};

export default ListGift;
