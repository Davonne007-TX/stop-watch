import { useRef, useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  return (
    <>
      <div className="text-white flex h-screen items-center text-7xl">
        <span className="mx-auto">Time:</span>
      </div>
    </>
  );
}
