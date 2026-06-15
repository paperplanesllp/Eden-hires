import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hiring from "./components/Hiring";
import RoleApplication from "./components/RoleApplication";
import HiringThankYou from "./components/HiringThankYou";
import RoleThankYou from "./components/RoleThankYou";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/role" element={<RoleApplication/>} />
        <Route path="/hiring/thank-you" element={<HiringThankYou />} />
        <Route path="/role/thank-you" element={<RoleThankYou />} />
      </Routes>
    </>
  );
}

export default App;