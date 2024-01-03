import React, { useRef, useState, useEffect } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  //handle start
  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  //handle stop
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  //handle reset
  const handleRest = () => {
    setStartTime(null);
    setNow(null);
  };

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <div className="text-white flex flex-col items-center text-3xl md:text-6xl lg:text-7xl mt-80">
        <span className="mx-auto font-mich font-bold">
          Time:{secondsPassed.toFixed(3)}
        </span>
        <div className="flex items-center justify-center gap-4 bg-white p-2 text-lg md:p-5 md:text-4xl lg:p-5 lg:text-5xl mt-5 font-mich">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleStop}
          >
            Stop
          </button>

          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleRest}
          >
            Rest
          </button>
        </div>
      </div>
    </>
  );
}
