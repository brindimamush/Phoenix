import React from 'react';
import { CircleCard } from './CircleCard';
import '../App.css'; // Ensure your CSS is accessible

export const CardHolder: React.FC = () => {
  return (
    <div className="cardHolder">
      <CircleCard color="red" />
      <CircleCard color="black" />
      <CircleCard color="red" />
      <CircleCard color="black" />
      <CircleCard color="red" />
      <CircleCard color="black" />
      <CircleCard color="red" />

      <div className="fireHolder">
        {/* Images in React public folder are referenced directly from the root */}
        <img src="/assets/fire.jpg" alt="fire card" className="fire" />
      </div>
    </div>
  );
};