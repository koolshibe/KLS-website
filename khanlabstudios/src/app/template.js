'use client';

import { motion } from "motion/react";
import { animate } from 'motion';
import { useEffect } from 'react';

export default function Template({ children }) {

  useEffect(() => {
        const onPageLoad = () => {
            console.log('page loaded');
            animate('#exit', { rotateY: 90 }, { duration: 0.75 });
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
  })

  return ( 
      <motion.div
        style={{ transformOrigin:"right top" }}
        initial={{ rotateY: 90, opacity: 0.5}}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
);
}