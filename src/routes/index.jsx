import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Schedule from "../pages/Schedule";

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<LandingPage />} />

      {/* route "/schedule" */}
      <Route path="/booking" element={<Schedule />} />
    </Routes>
  );
}

export default RoutesIndex;
