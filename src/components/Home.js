import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const homeVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  }
}

const buttonVariants = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1],
  }
}

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={homeVariants}
      initial="initial"
      animate="animate"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;