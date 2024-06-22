import React from 'react'

import "./Timer.css";

const TimerControl = ({timeOn, onStart, onStop, onReset, onLap }) => {
  return (
    <div className="timer-controls">
      {!timeOn && <button onClick={onStart} > Iniciar </button>}
      {timeOn && <button onClick={onStop} > Parar </button>}
      {timeOn && <button onClick={onLap} > Volta </button>}
      <button onClick={onReset} > Zerar </button>
    </div>
  )
}

export default TimerControl