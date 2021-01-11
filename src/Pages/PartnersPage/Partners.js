import React from "react";
import "./Partners.css";
import { motion } from "framer-motion";
function Partners() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='partners'
    >
      <h1>Partners</h1>
    </motion.div>
  );
}

export default Partners;
