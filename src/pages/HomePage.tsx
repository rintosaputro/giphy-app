import giphyImg from "../assets/images/giphy.jpg";
import { Link } from "react-router-dom";
import HeaderText from "../components/HeaderText";

const HomePage = () => {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen">
      <HeaderText>WELCOME TO YOUR GIPHY</HeaderText>
      <img
        alt="giphy"
        src={giphyImg}
        className="w-[330px] shadow-lg shadow-black-500/50 mt-8"
      />
      <Link
        to="/iron-man"
        className="text-blue-600 underline font-medium mt-20"
      >
        IRON MAN GIPHY
      </Link>
      <Link to="/search" className="text-blue-600 underline font-medium mt-3">
        SEARCH YOUR GIPHY
      </Link>
    </main>
  );
};

export default HomePage;
