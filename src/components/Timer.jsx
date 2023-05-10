import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  // Specify the start time as a Unix timestamp in milliseconds
  const startTime = new Date("2023-05-10T21:43:32Z").getTime();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const elapsedSeconds = Math.floor(elapsedTime / 1000);

      setSeconds(elapsedSeconds % 60);
      setMinutes(Math.floor(elapsedSeconds / 60) % 60);
      setHours(Math.floor(elapsedSeconds / 3600));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="text-5xl font-bold">
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
}

export default Timer;
