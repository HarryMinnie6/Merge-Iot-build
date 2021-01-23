import React from "react";
import { motion } from "framer-motion";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./Contact.css";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="contact"
    >
      <div className="contact__wrapper">
        <div className="contact__left">
          <div className="contact__left-contactDetails">
            <Slide top>
              <h1>We would love to hear from you. </h1>
            </Slide>
            <p>
              Whether you have a question about features, pricing, need a demo,
              or anything else. We are ready to answer your questions.
            </p>

            <div className="contact__left-contactDetails-Email">
              <p>Send us an email</p>

              <Fade delay={800}>
                <p>email@email.com</p>
              </Fade>
              <Fade delay={1000}>
                <p>email@email.com</p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="contact__right">
          <div className="contact__right-imageWrapper"></div>
          <img
            className="contact__right-image"
            src="https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            src="https://cdn.pixabay.com/photo/2016/10/21/19/05/netherlands-1758841_960_720.png"
            alt="location on map"
          />
          <div className="contact__right-location-wrapper">
            <p>Location</p>
            <div className="contact__right-location">
              <LocationOnIcon /> <p>Netherlands</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
