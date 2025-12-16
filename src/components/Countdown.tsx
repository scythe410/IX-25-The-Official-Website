
'use client';

import { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-12-20T08:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the initial render
    setIsClient(true);
    // Set the initial time left
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const renderTime = () => {
    if (!isClient) {
      return (
        <>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-glow">--</div>
            <div className="text-sm text-gray-400 uppercase">Days</div>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-glow">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-glow">--</div>
            <div className="text-sm text-gray-400 uppercase">Hours</div>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-glow">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-glow">--</div>
            <div className="text-sm text-gray-400 uppercase">Minutes</div>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-glow">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-glow">--</div>
            <div className="text-sm text-gray-400 uppercase">Seconds</div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-glow">{formatTime(timeLeft.days)}</div>
          <div className="text-sm text-gray-400 uppercase">Days</div>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-glow">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-glow">{formatTime(timeLeft.hours)}</div>
          <div className="text-sm text-gray-400 uppercase">Hours</div>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-glow">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-glow">{formatTime(timeLeft.minutes)}</div>
          <div className="text-sm text-gray-400 uppercase">Minutes</div>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-glow">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-glow">{formatTime(timeLeft.seconds)}</div>
          <div className="text-sm text-gray-400 uppercase">Seconds</div>
        </div>
      </>
    );
  };

  return <div className="flex items-center justify-center gap-2 md:gap-4">{renderTime()}</div>;
};

export default Countdown;
