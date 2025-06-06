import React from 'react';
import '../App.css'; // Ensure your CSS is accessible

export const ActionButtons: React.FC = () => {
  return (
    <div className="btnHolder">
      <button className="redBtn">
        <div className="redButton">
          <span>RED</span>
          <span>X2</span>
        </div>
      </button>

      <button className="yellowBtn">
        <div className="yellowButton">
          {/* Images in React public folder are referenced directly from the root */}
          <img src="/assets/fire-red.png" alt="fire" width="35px" height="23px" />
          <span><p>X32</p></span>
        </div>
      </button>

      <button className="blackBtn">
        <div className="blackButton">
          <span>BLACK</span>
          <span>X2</span>
        </div>
      </button>
    </div>
  );
};