import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import IronManPage from "./pages/IronManPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/iron-man" element={<IronManPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
