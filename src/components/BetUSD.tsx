import React, { useState } from 'react';
import '../App.css'; // Ensure your CSS is accessible

export const BetUSD: React.FC = () => {
  const [balance, setBalance] = useState(0.30); // Initial balance

  const handleMinus = () => {
    setBalance(prevBalance => Math.max(0, prevBalance - 0.10)); // Example decrement
  };

  const handlePlus = () => {
    setBalance(prevBalance => prevBalance + 0.10); // Example increment
  };

  return (
    <div className="betContainer">
      <div className="betUsdHolder">
        <p>Bet USD</p>
        <span className="balance">{balance.toFixed(2)}</span> {/* Format to 2 decimal places */}
      </div>
      <div className="plusminusHolder">
        <button className="minusBtn" onClick={handleMinus}>
          <span>-</span>
        </button>
        <button className="coinBtn">
          {/* Images in React public folder are referenced directly from the root */}
          <img
            src="/assets/coin-stack.png"
            alt="coin stack symbol"
            width="20px"
            height="15px"
          />
        </button>
        <button className="plusBtn" onClick={handlePlus}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};