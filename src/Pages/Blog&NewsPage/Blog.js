import React from "react";
import "./Blog.css";
import { motion } from "framer-motion";
function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="blog"
    >
      <div className="blog__wrapper">
        <p>Our Latest Blog & News Posts</p>
        <div className="blog__postsHolder">
          <div className="blog__wrapper">
            <div className="blog__post">
              <img
                className="blog__image"
                src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="blog"
              />
              <div className="blog__description">
                <h1>Title</h1>
                <p>Some Random text...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
