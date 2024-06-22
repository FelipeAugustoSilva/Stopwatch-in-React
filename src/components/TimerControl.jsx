import React from 'react'

import "./Timer.css";

const TimerControl = ({timeOn, onStart, onStop }) => {
  return (
    <div className="timer-controls">
      {!timeOn && <button onClick={onStart} > Iniciar </button>}
      {timeOn && <button onClick={onStop} > Parar </button>}
      {timeOn && <button onClick={onStart} > Volta </button>}
      <button onClick={onStop} > Zerar </button>
    </div>
  )
}

export default TimerControl