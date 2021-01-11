import React, { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";

import Fade from 'react-reveal/Fade';
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


  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='homePage'
    >
      <div className='homePage__landing'>
        <h1 style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          Where Iot comes together
        </h1>
      </div>
      <Fade left>
      <div className='homePage__about '>ffjfjf</div>
    </Fade>
      
    </motion.div>
  );
}

export default HomePage;
