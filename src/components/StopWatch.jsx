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

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <div className="text-white flex flex-col items-center text-7xl mt-80">
        <span className="mx-auto font-mich font-bold">
          Time:{secondsPassed.toFixed(3)}
        </span>
        <div className="flex gap-4 bg-white p-5 text-5xl mt-5 font-mich">
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
        </div>
      </div>
    </>
  );
}
