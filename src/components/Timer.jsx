import React from 'react';

import TimerDisplay from "./TimerDisplay.jsx";
import TimerControl from "./TimerControl.jsx";
import LapList from "./LapList.jsx";

import "./Timer.css";

const Timer = () => {
  return (
    <div className="timer-container">
      <TimerDisplay />
      <TimerControl />
      <LapList />

    </div>
  );
};

export default Timer;