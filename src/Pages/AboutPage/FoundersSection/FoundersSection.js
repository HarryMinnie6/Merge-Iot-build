import React from "react";
import "./FoundersSection.css";
import { motion } from "framer-motion";

function FoundersSection() {
  return (
    <div className='about__founders'>
      <p>Meet The Founders</p>

      <div className='founders__wrapper'>
        <div className='founder'>
          <div className='founder__imageHolder'>
            <img
              className='founder__image'
              src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
          </div>
          <div className='founder__paragraph'>
            <h3>Name Surname</h3>
            <i>Co-Founder</i>
          </div>
        </div>
        <div className='founder founder2'>
          <div className='founder__imageHolder'>
            <img
              className='founder__image'
              src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
          </div>
          <div className='founder__paragraph founder__paragraph2'>
            <h3>Name Surname</h3>
            <i>Co-Founder</i>
          </div>
        </div>
      </div>
      <h1 className='about__foundersHeader'>
        We are a combination of great values, culture and strong beliefs.
      </h1>
    </div>
  );
}

export default FoundersSection;
