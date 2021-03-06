import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  animate: {
    x: [-40, 40],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
}

const Loader = () => {
  return (
    <>
      <motion.div
        className='loader'
        variants={loaderVariants}
        animate='animate'
      />
    </>
  );
}

export default Loader;