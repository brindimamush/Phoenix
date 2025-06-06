import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import '../App.css'; // Ensure your CSS is accessible

export const SpeedometerSection: React.FC = () => {
  return (
    <div className="speedoMeterHolder">
      {/* Images in React public folder are referenced directly from the root */}
      <img src="/assets/spedometer.png" className="speedoMeter" alt="Speedometer" />
      <ToggleSwitch />
    </div>
  );
};