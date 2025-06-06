import React from 'react';
import '../App.css'; // Ensure your CSS is accessible

interface CircleCardProps {
  color: 'red' | 'black';
}

export const CircleCard: React.FC<CircleCardProps> = ({ color }) => {
  const circleHolderClass = `circleHolder${color === 'red' ? 'Red' : 'Black'}`;
  const innerCircleClass = `innerCircle${color === 'red' ? 'Red' : 'Black'}`;

  return (
    <div className={circleHolderClass}>
      <span className={innerCircleClass}></span>
    </div>
  );
};