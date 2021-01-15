import React, { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
function HomePage() {
  //parralax effect
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollUp(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="homePage"
    >
      <div className={scrollUp ? "homePage__arrow2" : "homePage__arrow"}>
        <p>SCROLL</p>
        <svg
          width="8"
          height="46"
          viewBox="0 0 8 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.64645 45.3536C3.84171 45.5488 4.15829 45.5488 4.35355 45.3536L7.53553 42.1716C7.7308 41.9763 7.7308 41.6597 7.53553 41.4645C7.34027 41.2692 7.02369 41.2692 6.82843 41.4645L4 44.2929L1.17157 41.4645C0.976311 41.2692 0.659728 41.2692 0.464466 41.4645C0.269204 41.6597 0.269204 41.9763 0.464466 42.1716L3.64645 45.3536ZM3.5 0L3.5 45H4.5L4.5 0L3.5 0Z"
            fill="black"
          />
        </svg>
      </div>

      <div className="homePage__landing">
        <h1 style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          MERGE-IoT
        </h1>
      </div>
    </motion.div>
  );
}

export default HomePage;
