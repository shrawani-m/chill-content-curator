
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

type BreakTimerProps = {
  initialMinutes: number;
};

const BreakTimer = ({ initialMinutes }: BreakTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(initialMinutes * 60);
  };

  return (
    <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
      <Clock size={18} className="text-chill-600 mr-2" />
      <span className="font-medium">{formatTime(timeLeft)}</span>
    </div>
  );
};

export default BreakTimer;
