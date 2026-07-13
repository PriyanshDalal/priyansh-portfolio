import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BikeX from "./pages/BikeX";
import CareerLens from "./pages/CareerLens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/bikex" element={<BikeX />} />
      <Route path="/projects/careerlens" element={<CareerLens />} />
    </Routes>
  );
}

export default App;