import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import DevProfile from "./Components/DevProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/DevProfile" element={<DevProfile />}></Route>
    </Routes>
  );
}

export default App;
