import React from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = ({ text }: { text: string }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.06,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.span
      variants={sentence}
      initial="hidden"
      animate="visible"
      className="inline-block"
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <motion.span key={char + "-" + index} variants={letter} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
       <motion.span
        className="inline-block w-0.5 h-[0.9em] bg-current ml-2 mb-[-2px] align-middle"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
    </motion.span>
  );
};

export default TypingAnimation;
