import { FC } from "react";

interface CardGiftProps {
  assetImage: string;
}

const CardGift: FC<CardGiftProps> = ({ assetImage }) => {
  return (
    <div className="w-auto flex items-center min-h-[100px] sm:min-h-[250px]">
      <img
        src={assetImage}
        alt="gif"
        width="100%"
        className="shadow-lg shadow-black-500/10"
      />
    </div>
  );
};

export default CardGift;
