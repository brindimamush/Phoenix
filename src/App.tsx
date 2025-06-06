import React from 'react';
import './App.css'; // This will contain your main CSS
import { CardHolder } from './components/CardHolder';
import { SpeedometerSection } from './components/SpeedometerSection';
import { BottomSection } from './components/BottomSection';

function App() {
  return (
    <>
      <CardHolder />
      <SpeedometerSection />
      <BottomSection />
    </>
  );
}

export default App;