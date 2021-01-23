import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import FoundersSection from "./FoundersSection/FoundersSection";

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="about__wrapper">
        <h1 className="about__wrapperHeader">Your Partner In IoT</h1>
        <p className="about__paragraph">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. Lorem ipsum, or lipsum as it is sometimes known,
          is dummy text used in laying out print, graphic or web designs. The
          passage is attributed to an unknown typesetter in the 15th century who
          is thought to have scrambled parts of Cicero's De Finibus Bonorum et
          Malorum for use in a type specimen book.
        </p>
      </div>
      <FoundersSection />
    </motion.div>
  );
}

export default About;
