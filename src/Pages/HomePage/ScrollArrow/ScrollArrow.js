import React, { useState, useEffect } from "react";
import "./Arrow.css";

function ScrollArrow() {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollUp(window.scrollY > 10);
    });
  }, []);
  return (
    <div className={scrollUp ? "homePage__arrow2" : "homePage__arrow"}>
      <p>SCROLL</p>
      <svg
        className='arrow'
        width='16'
        height='47'
        viewBox='0 0 16 47'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.29289 46.7071C7.68342 47.0976 8.31658 47.0976 8.70711 46.7071L15.0711 40.3431C15.4616 39.9526 15.4616 39.3195 15.0711 38.9289C14.6805 38.5384 14.0474 38.5384 13.6569 38.9289L8 44.5858L2.34315 38.9289C1.95262 38.5384 1.31946 38.5384 0.928933 38.9289C0.538408 39.3195 0.538408 39.9526 0.928933 40.3431L7.29289 46.7071ZM7 3.52408e-09L7 46L9 46L9 -3.52408e-09L7 3.52408e-09Z'
          fill='#4BA7BA'
        />
      </svg>
    </div>
  );
}

export default ScrollArrow;
