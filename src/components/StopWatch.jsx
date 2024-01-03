import { useRef, useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  return (
    <>
      <div className="text-white flex flex-col items-center text-7xl mt-80">
        <span className="mx-auto">Time:</span>
        <div className="flex gap-4 bg-white p-5 text-5xl mt-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Start
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Stop
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
