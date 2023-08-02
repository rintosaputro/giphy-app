import CardGift from "./CardGift";
import { GiphyDataInterface } from "../utils/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../states";
import { FC } from "react";
import Skeleton from "./Skeleton";

interface ListGiftProps {
  page: "ironMan" | "search";
}

const ListGift: FC<ListGiftProps> = ({ page }) => {
  const ironMan = useSelector((state: RootState) => state.ironMan);
  const searchResult = useSelector((state: RootState) => state.searchResult);

  const { data, isLoading } = page === "ironMan" ? ironMan : searchResult;

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 md:gap-14 mt-16 md:mt-28 mb-14 md:mb-20">
        {[...Array(9)].map((_item: number, index: number) => {
          return <Skeleton key={index} />;
        })}
      </section>
    );
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 md:gap-14 mt-16 md:mt-28 mb-14 md:mb-20">
      {data.map((item: GiphyDataInterface, index: number) => (
        <CardGift assetImage={item.images.fixed_width.url} key={index} />
      ))}
    </section>
  );
};

export default ListGift;
