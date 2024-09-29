import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import Appointment from "../pages/Appointment";
import LifeCoach from "../pages/LifeCoach";
import Psychology from "../pages/Psychology";
import Form from "../pages/appointment/life-coach/Form";

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<LandingPage />} />
      {/* route "/about" */}
      <Route path="/about" element={<AboutUs />} />
      {/* route "/appointment" */}
      <Route path="/appointment" element={<Appointment />} />

      <Route path="/appointment/life-coach" element={<LifeCoach />} />

      <Route path="/appointment/psychology" element={<Psychology />} />

      {/* route for Form.jsx */}
      <Route path="/appointment/life-coach/form" element={<Form />} />
    </Routes>
  );
}

export default RoutesIndex;
