import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Schedule from "../pages/Schedule";
import AboutUs from "../pages/AboutUs";
import Appointment from "../pages/Appointment";
import LifeCoach from "../pages/LifeCoach";
<<<<<<< Updated upstream
import Form from "../pages/appointment/life-coach/Form";
=======
import Psychology from "../pages/Psychology";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      {/* route for Form.jsx */}
      <Route path="/appointment/life-coach/form" element={<Form />} />
=======

      <Route path="/appointment/psychology" element={<Psychology />} />
>>>>>>> Stashed changes
    </Routes>
  );
}

export default RoutesIndex;
