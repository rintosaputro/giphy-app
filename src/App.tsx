import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import IronManPage from "./pages/IronManPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/iron-man" element={<IronManPage />} />
    </Routes>
  );
}

export default App;
