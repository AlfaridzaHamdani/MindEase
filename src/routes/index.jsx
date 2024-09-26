import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Schedule from "../pages/Schedule";
import AboutUs from "../pages/AboutUs";
import Appointment from "../pages/Appointment";

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<LandingPage />} />
      {/* route "/schedule" */}
      <Route path="/booking" element={<Schedule />} />
      {/* route "/about" */}
      <Route path="/about" element={<AboutUs />} />
      {/* route "/appointment" */}
      <Route path="/appointment" element={<Appointment />} />
    </Routes>
  );
}

export default RoutesIndex;
