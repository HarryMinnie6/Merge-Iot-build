import React from "react";
import "./Solutions.css";
import { motion } from "framer-motion";
function Solutions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='solutions'
    >
      <h1>solutions</h1>
    </motion.div>
  );
}

export default Solutions;
