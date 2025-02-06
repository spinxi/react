import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="container text-center mt-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="display-4">Welcome to Movies</h1>
      <p className="lead">Discover epic films here for free.</p>
      <img 
        src="https://camo.githubusercontent.com/1159f9b60af1442b928618f0788df0bd282354868dd627c13f90bde864682e4b/68747470733a2f2f63646e2e617273746563686e6963612e6e65742f77702d636f6e74656e742f75706c6f6164732f323032322f30372f6e6574666c69782e6a7067" 
        alt="Cinema Hero" 
        className="img-fluid rounded shadow my-4"
      />
    </motion.div>
  );
};

export default Home;