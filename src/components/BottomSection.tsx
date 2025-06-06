import React from 'react';
import { BetUSD } from './BetUSD';
import { ActionButtons } from './ActionButtons';
import '../App.css'; // Ensure your CSS is accessible

export const BottomSection: React.FC = () => {
  return (
    <div className="bottom">
      <BetUSD />
      <ActionButtons />
    </div>
  );
};