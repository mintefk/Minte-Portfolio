import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress, duration }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarWidth((prevWidth) => {
        if (prevWidth >= progress) {
          clearInterval(interval);
          return progress;
        }
        return prevWidth + 1;
      });
    }, duration / progress);

    return () => {
      clearInterval(interval);
    };
  }, [progress, duration]);

  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${barWidth}%` }}></div>
    </div>
  );
};

export default ProgressBar;