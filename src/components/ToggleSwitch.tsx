import React, { useState } from 'react';
import '../App.css'; // Ensure your CSS is accessible

export const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggleHolder">
      <input
        id="cb-toggle"
        type="checkbox"
        className="hide-me"
        aria-labelledby="cb-label"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <label htmlFor="cb-toggle" className="toggle"></label>
      <span className="high">
        <p className="highRisk">High risk mode</p>
      </span>
    </div>
  );
};