import React from "react";
import "./styles.scss";

const ProgressBar = ({ currentStep, handleStepChange }) => {
  return (
    <div className="progress-bar-container">
      <h2 className="progress-title">Pendaftaran Konseling</h2>
      <div className="progress-bar">
        {/* Step 1 */}
        <div
          className={`progress-step ${currentStep >= 1 ? "active" : ""} ${
            currentStep > 1 ? "completed" : ""
          }`}
          onClick={() => handleStepChange(1)}
        >
          <div className="step-circle">1</div>
          <span className="step-label">Paket</span>
        </div>

        <div
          className={`progress-line ${currentStep > 1 ? "completed-line" : ""}`}
        ></div>

        {/* Step 2 */}
        <div
          className={`progress-step ${currentStep >= 2 ? "active" : ""} ${
            currentStep > 2 ? "completed" : ""
          }`}
          onClick={() => handleStepChange(2)}
        >
          <div className="step-circle">2</div>
          <span className="step-label">Profil</span>
        </div>

        <div
          className={`progress-line ${currentStep > 2 ? "completed-line" : ""}`}
        ></div>

        {/* Step 3 */}
        <div
          className={`progress-step ${currentStep >= 3 ? "active" : ""}`}
          onClick={() => handleStepChange(3)}
        >
          <div className="step-circle">3</div>
          <span className="step-label">Pembayaran</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
