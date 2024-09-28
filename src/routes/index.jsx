import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Schedule from "../pages/Schedule";
import AboutUs from "../pages/AboutUs";
import Appointment from "../pages/Appointment";
import LifeCoach from "../pages/LifeCoach";

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

      <Route path="/appointment/life-coach" element={<LifeCoach />} />
    </Routes>
  );
}

export default RoutesIndex;
