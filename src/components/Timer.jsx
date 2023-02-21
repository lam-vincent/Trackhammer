import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => {
        if (seconds < 59) {
          return seconds + 1;
        } else {
          setMinutes(minutes => {
            if (minutes < 59) {
              return minutes + 1;
            } else {
              setHours(hours => hours + 1);
              return 0;
            }
          });
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="text-5xl font-bold">
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
}

export default Timer;
