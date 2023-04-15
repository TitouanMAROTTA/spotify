import React, { useState, useRef, useEffect } from "react";
import "./BottomBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward, faStepForward, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function BottomBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging && progressBarRef.current) {
        const { left, right } = progressBarRef.current.getBoundingClientRect();
        const cursorX = event.clientX;
        const newProgress = (cursorX - left) / (right - left);
        setProgress(newProgress);
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bottom-bar">
        <div className="song-info">
            <div className="song-title">Song Title</div>
            <div className="song-artist">Song Artist</div>
        </div>

        <div className="player-controls">
            <FontAwesomeIcon icon={faStepBackward} />
            {isPlaying ? (
                <FontAwesomeIcon icon={faPause} className="pause-icon" onClick={handlePlayPause} />
            ) : (
                <FontAwesomeIcon icon={faPlay} className="play-icon" onClick={handlePlayPause} />
            )}
            <FontAwesomeIcon icon={faStepForward} />
        </div>
        
        <div
            className="song-progress"
            ref={progressBarRef}
            onMouseDown={handleMouseDown}
        >
            <div className="progress-bar" style={{ width: `${progress * 100}%` }}></div>
        </div>
    </div>
  );
}

export default BottomBar;