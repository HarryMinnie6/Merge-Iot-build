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
      className='blog'
    >
      <div className='blog__Pagewrapper'>
        <p>Our Latest Blog & News Posts</p>
        <div className='blog__postsHolder'>
          <div className='blog__wrapper'>
            <BlogCard
              date={"March 20, 2019"}
              title={"Title"}
              paragraph={
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
              }
            />
            <BlogCard
              date={"March 20, 2019"}
              title={"Title"}
              paragraph={
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
              }
            />
            <BlogCard
              date={"March 20, 2019"}
              title={"Title"}
              paragraph={
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
              }
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
