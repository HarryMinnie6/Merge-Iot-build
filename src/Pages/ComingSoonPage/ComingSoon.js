import React, { useEffect, useState } from "react";
import "./ComingSoon.css";

function ComingSoon() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-02-1`) - +new Date() + 28800000;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className='time'>
        {timeLeft[interval]} {interval}{" "}
      </div>
    );
  });
  return (
    <div className='comingSoon'>
      <h1>GOING LIVE IN</h1>
      <div className='comingSoon__timeDisplay'>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <div className='contact__info'>
        <h3> Contact Information</h3>
        <div>
          <p className='contact__info-paragraph'>Email: chanel@merge-iot.com</p>
          <p className='contact__info-paragraph'>Email: shaun@merge-iot.com</p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
