import React from "react";
import "./Blog.css";
import { motion } from "framer-motion";
import BlogCard from "./BlogCards/BlogCard";
function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="blog"
    >
      <div className="blog__Pagewrapper">
        <p>Our Latest Blog & News Posts</p>
        <div className="blog__postsHolder">
          <div className="blog__wrapper">
            <BlogCard
              date={"March 20, 2019"}
              title={"test"}
              paragraph={
                "Lizards are a widespread group of squamate reptiles with over 60000 species ranging across all continents except Antarctica"
              }
            />
            <BlogCard
              date={"March 20, 2019"}
              title={"test"}
              paragraph={
                "Lizards are a widespread group of squamate reptiles with over 60000 species ranging across all continents except Antarctica"
              }
            />
            <BlogCard
              date={"March 20, 2019"}
              title={"test"}
              paragraph={
                "Lizards are a widespread group of squamate reptiles with over 60000 species ranging across all continents except Antarctica"
              }
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
