import React from "react";
import HeaderText from "../components/HeaderText";
import CardGift from "../components/CardGift";

const IronManPage = () => {
  return (
    <main className="container p-10 max-w-7xl m-auto">
      <HeaderText>IRON MAN GIPHY</HeaderText>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-28">
        {[...Array(9)].map((_item: number, index: number) => (
          <CardGift key={index} />
        ))}
      </section>
    </main>
  );
};

export default IronManPage;
