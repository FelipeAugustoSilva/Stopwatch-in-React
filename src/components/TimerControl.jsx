import React from 'react'

import "./Timer.css";

const TimerControl = ({onStart, onStop}) => {
  return (
    <div className="timer-controls">
      <button onClick={onStart} > Iniciar </button>
      <button onClick={onStop} > Zerar </button>
    </div>
  )
}

export default TimerControl