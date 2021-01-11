import React from 'react'
import './Blog.css'
import { motion } from "framer-motion";
function Blog() {
    return (
        <motion.div initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='blog'>
            <h1>blog</h1>
        </motion.div>
    )
}

export default Blog
