import React from "react";
import { motion } from "framer-motion";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./AboutHomePage.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function AboutHomePage() {
  return (
    <div className="AboutHomePage">
      <div className="AboutHomePage__wrapper">
        <div className="AboutHomePage__left">
          <h1>Big Data For A Better World</h1>
        </div>
        <div className="AboutHomePage__right">
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
            <Link to="/about" className="AboutHomePage__link">
              <p>MORE ABOUT US</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHomePage;
