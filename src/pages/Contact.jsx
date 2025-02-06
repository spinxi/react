
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useLocalStorage from '../hooks/useLocalStorage';

const Contact = () => {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useLocalStorage('contactName', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoredName(name);
    setName('');
  };

  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input 
            type="text" 
            id="name" 
            className="form-control" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {storedName && <p>Your name was sent: <strong>{storedName}</strong></p>}
    </motion.div>
  );
};

export default Contact;
