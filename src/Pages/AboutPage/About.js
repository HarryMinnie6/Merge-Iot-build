import React from "react";
import './About.css'
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div className='about'
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>about</h1>
    </motion.div>
  );
}

export default About;
