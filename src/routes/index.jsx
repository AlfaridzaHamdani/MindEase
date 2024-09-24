import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Schedule from "../pages/Schedule";
import AboutUs from "../pages/AboutUs";

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<LandingPage />} />
      {/* route "/schedule" */}
      <Route path="/booking" element={<Schedule />} />
      {/* route "/about" */}
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default RoutesIndex;
