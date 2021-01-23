import React, { useEffect, useState } from "react";
import "./Home.css";

import { motion } from "framer-motion";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import ScrollArrow from "./ScrollArrow/ScrollArrow";
import CompanyName from "./CompanyNameSVG/CompanyName";
import Slogan from "./Slogan/Slogan";
import Logo from "./Logo/Logo";
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
      className="homePage"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Fade delay={2200}>
        <div
          className="homePage__logo"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <Logo />
        </div>
      </Fade>
      <div
        className="homePage__Name"
        // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <CompanyName />
      </div>
      <Fade bottom delay={2200}>
        <div
          className="homePage__slogan"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <Slogan />
        </div>
      </Fade>
      <ScrollArrow />
    </motion.div>
  );
}

export default HomePage;
