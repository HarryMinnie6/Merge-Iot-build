import React from "react";
import './Services.css'
import { motion } from "framer-motion";
function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='services'
    >
      <h1>Services</h1>
    </motion.div>
  );
}

export default Services;
