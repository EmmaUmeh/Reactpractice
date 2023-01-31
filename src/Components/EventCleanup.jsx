import { useState,useEffect } from "react";

const EventCleanup = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

 useEffect(() => {
    const timerID = setInterval(refresh, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const refresh = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <p>{time}</p>
    </div>
  );

}

export default EventCleanup;