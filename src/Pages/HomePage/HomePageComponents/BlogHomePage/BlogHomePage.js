import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../../Blog&NewsPage/BlogCards/BlogCard";

import "./BlogHomePage.css";

function BlogHomePage() {
  return (
    <div className="BlogHomePage">
      <div className="BlogHomePage__wrapper">
        <p>What We Have To Say</p>
        <div className="BlogHomePage__display">
          <BlogCard
            date={"21 January 2020"}
            title={"Test"}
            paragraph={
              "Lizards are a widespread group of squamate reptiles with over 60000 species ranging across all continents except Antarctica"
            }
          />
          <BlogCard
            date={"21 January 2020"}
            title={"Test"}
            paragraph={
              "Lizards are a widespread group of squamate reptiles with over 60000 species ranging across all continents except Antarctica"
            }
          />
          <BlogCard
            date={"21 January 2020"}
            title={"Test"}
            paragraph={
              "Lizards are a widespread group of squamate reptiles with over 60000 species ranging across all continents except Antarctica"
            }
          />
        </div>
        <div className="BlogHomePage__link__holder">
          <Link className="BlogHomePage__link">
            <p>More Blogs and News...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogHomePage;
