// ProgressBar.jsx
import React from "react";
import "./styles.scss";

const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <h2 className="progress-title">Pendaftaran Konseling</h2>
      <div className="progress-bar">
        <div className="progress-step active">
          <div className="step-circle">1</div>
          <span className="step-label">Paket</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <div className="step-circle">2</div>
          <span className="step-label">Profil</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <div className="step-circle">3</div>
          <span className="step-label">Pembayaran</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
