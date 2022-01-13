import React from 'react';
import { motion } from 'framer-motion';

const FadeInComponentWhenVisible = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return (
    <motion.div
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false }}
      transition={{ duration: 0.8 , bounce: 0.5}}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 }
      }}>
      {children}
    </motion.div>
  );
};

export default FadeInComponentWhenVisible;
