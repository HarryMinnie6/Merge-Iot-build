import React from "react";
import "./Partners.css";
import { motion } from "framer-motion";
function Partners() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='partnersPage'
    >
      <div className='partners__wrapper'>
        <div className='partners__left'>
          <div className='partners__leftWrapper'>
            <h1>Meet Our Partners</h1>
            <p>
              Our partners closely align with our core values, beliefs and
              quality of service delivery
            </p>
            <div className='partners__offer'>
              <h2>Want to become a partner?</h2>
              <p>email@email.com</p>
            </div>
          </div>
        </div>
        <div className='partners__right'>
          <div className='partners__holder'>
            <div className='partner'>
              <img
              className='partner__image'
                src='https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH'
                alt='partner1'
              />
            </div>
            <div className='partner'> <img
            className='partner__image'
              src='https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH'
              alt='partner1'
            /></div>
          </div>
          <div className='partners__holder'>
            <div className='partner'> <img
            className='partner__image'
              src='https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH'
              alt='partner1'
            /></div>
            <div className='partner'> <img
            className='partner__image'
              src='https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH'
              alt='partner1'
            /></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Partners;
