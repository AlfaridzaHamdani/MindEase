import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Package from "../components/packageConselingSection";
import Register from "../components/registerSection";
import ProgressBar from "../components/progresBarSection";
import Header from "../components/heading";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <>
      <Header />
      <Navbar />
      <ProgressBar
        currentStep={currentStep}
        handleStepChange={handleStepChange}
      />

      {currentStep === 1 && <Package handleStepChange={handleStepChange} />}
      {currentStep === 2 && <Register handleStepChange={handleStepChange} />}
      {currentStep === 3 && <div></div>}

      <Footer />
    </>
  );
};

export default Form;
