import React, { useState, useEffect } from "react";

const SimpleCounter = () => {
  const [counter, setCounter] = useState(0);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

 
  const hours = Math.floor(counter / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((counter % 3600) / 60).toString().padStart(2, "0");
  const seconds = (counter % 60).toString().padStart(2, "0");

  return (
    <div className="contador d-flex justify-content-center align-items-center bg-dark text-white p-3">
      <div className="hours p-2 bg-light border rounded mx-1 text-dark">{hours}</div>
      <div className="colon p-2">:</div>
      <div className="minutes p-2 bg-light border rounded mx-1 text-dark">{minutes}</div>
      <div className="colon p-2">:</div>
      <div className="seconds p-2 bg-light border rounded mx-1 text-dark">{seconds}</div>
    </div>
  );
};

export default SimpleCounter;
