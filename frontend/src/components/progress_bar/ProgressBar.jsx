import React from 'react';
import "../musicapp/MusicApp.css"

const ProgressBar = ({ elapsedTime, duration, audioRef }) => {
  const width = (elapsedTime / duration) * 100;

  const handleClick = (event) => {
    const { left, width } = event.target.getBoundingClientRect();
    const clickX = event.clientX - left;
    const progress = clickX / width;
    audioRef.current.currentTime = progress * duration;
  };

  return (
    <div className="progress-bar-container" onClick={handleClick}>
    <input value={elapsedTime} type="range" name="range" min={elapsedTime} max={duration} className="progress-bar" style={{ width: `${width}%` }}></input>
      {/* <div className="progress-bar" style={{ width: `${width}%` }} /> */}
    </div>
  );
};

export default ProgressBar;
