
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About this project</h1>
      <p>
        This modern React app uses a free movies API, cool animations, and a dark mode toggle. 
        Built with Vite, React Hooks, custom hooks, React Router, Axios, and Framer Motion.
      </p>
    </motion.div>
  );
};

export default About;
