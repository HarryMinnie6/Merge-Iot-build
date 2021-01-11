import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='contact'
    >
      <h1>Contact</h1>
    </motion.div>
  );
}

export default Contact;
