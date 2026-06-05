import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hiring from "./components/Hiring";
import RoleApplication from "./components/RoleApplication";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/role" element={<RoleApplication/>} />
      </Routes>
    </>
  );
}

export default App;