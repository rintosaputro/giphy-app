import React from "react";
import CardGift from "./CardGift";

const ListGift = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-28">
      {[...Array(9)].map((_item: number, index: number) => (
        <CardGift key={index} />
      ))}
    </section>
  );
};

export default ListGift;
