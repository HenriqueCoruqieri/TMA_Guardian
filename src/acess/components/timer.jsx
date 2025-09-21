"use client";

import React, { useState, useRef } from "react";
import { Button } from "@chakra-ui/react";
import { LiaStopwatchSolid } from "react-icons/lia";

const Timer = () => {
  const [time, setTime] = useState(0); // tempo em segundos
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Iniciar
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  // Parar
  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // Zerar (somente se estiver parado)
  const handleReset = () => {
    if (!isRunning) setTime(0);
  };

  // Limpa o intervalo ao desmontar
  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Formatação
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="px-8 py-8 bg-gray-700 justify-center rounded-2xl">
      <div className="inline flex-col text-6xl font-bold text-white">
        <LiaStopwatchSolid size="32px" color="white" />
        <h1>
          {hours}:{minutes}:{seconds}
        </h1>

        <div className="flex mt-10 gap-10">
          <Button
            width="48"
            rounded="full"
            onClick={handleStart}
            disabled={isRunning}
          >
            Iniciar
          </Button>
          <Button
            width="48"
            rounded="full"
            onClick={handlePause}
            disabled={!isRunning}
          >
            Parar
          </Button>
          <Button
            width="48"
            rounded="full"
            onClick={handleReset}
            disabled={isRunning || time === 0}
          >
            Zerar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
