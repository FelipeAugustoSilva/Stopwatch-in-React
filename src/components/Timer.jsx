import React, { useState, useEffect } from 'react';

import TimerDisplay from "./TimerDisplay.jsx";
import TimerControl from "./TimerControl.jsx";
import LapList from "./LapList.jsx";

import "./Timer.css";

const Timer = () => {






  const [milliseconds, setMilliseconds] = useState(5555); // recebe os millisegundos 
  const [timeOn, setTimeOn] = useState(false); // tempo ligado ou desligado
  const [laps, setLaps] = useState([]); // recebe o valor das voltas






  // formatar o tempo minutos / segundos / centisegundos    
  // recebe a prop milliseconds
  // a chamada da formatTime foi passada como prop para o TimerDisplay
  const formatTime = () => {
    const minutes = ("0" + (Math.floor(milliseconds / 60000) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(milliseconds / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + (Math.floor(milliseconds / 10) % 100)).slice(-2);

    return `${minutes}:${seconds}:${centiseconds}`
  };







  // a cada chamada do startTimer ele o prevMilliseconds add + 10 millisecoonds a prevMilliseconds
  // recebe a prop setMilliseconds
  // a chamada da startTimer foi passada como prop para o TimerControl
  const startTimer = (interval) => {
    return setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
    }, 10);
  };




  // stopTimer o intervalo e retorna o mesmo
  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  }






  // Coordena a execução do relogio
  // Se o TimeOn estiver ligado, passar o valor do startTimer, se não passar o valor do stopTimer
  useEffect(() => {
    let interval = null;

    if(timeOn) {
      interval = startTimer(interval);
    } else {
      interval = stopTimer(interval);
    }
    return () => stopTimer(interval);
  }, [timeOn]);





  // Essa função zera todos os states
  //passada como uma prop para o TimerControl
  const resetTimer = () => {
    setMilliseconds(0);
    setTimeOn(false);
    setLaps([]);
  };




  //Função que adiciona as voltas
  //Passa como prop para o TimerControl
  const addLap = () => {
    setLaps([...laps, formatTime()]);
  };





  return (
    <div className="timer-container">
      <TimerDisplay time={formatTime()}/>
      <TimerControl 
        timeOn={timeOn}
        onStart={() => setTimeOn(true)}
        onStop={() => setTimeOn(false)}
        onReset={resetTimer}
        onLap={addLap}
      />
      <LapList laps={laps}/>

    </div>
  );
};

export default Timer;