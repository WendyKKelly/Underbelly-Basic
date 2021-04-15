import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Example = (id) => {
  return (
    <div className="container">
      <motion.div
        className="blob"
        key={id}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 1,
          },
          pageAnimate: {
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
          },
          transition: {
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          },
        }}
      ></motion.div>
      )
      <style>
        {`
    .container {
        color: linear-gradient(180deg, #ee9b27 0%, rgba(255, 160, 163, .7 ) 100%);
        width: 100%;
        height: 100%;
    }
.blob {
    color: red;
    width: 20rem;
    height: 20rem;
    height: 100%;
    border-radius: 50%;
   
}
`}{' '}
      </style>
    </div>
  );
};
export default Example;
