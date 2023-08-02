import giphyImg from "../assets/images/giphy.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen">
      <h1 className="font-bold text-4xl mb-8">WELCOME TO YOUR GIPHY</h1>
      <img
        alt="giphy"
        src={giphyImg}
        className="w-[330px] shadow-lg shadow-black-500/50"
      />
      <Link to="/" className="text-blue-600 underline font-medium mt-20">
        IRON MAN GIPHY
      </Link>
      <Link to="/" className="text-blue-600 underline font-medium mt-3">
        SEARCH YOUR GIPHY
      </Link>
    </main>
  );
};

export default HomePage;
