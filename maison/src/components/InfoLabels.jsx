import React from 'react';
import { motion } from 'framer-motion';

export default function InfoLabels() {
  const labels = ['FUNCTION', 'UTILITY', 'ENDURANCE'];

  return (
    <div className="hidden md:flex absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2 flex-col space-y-32 z-30 origin-center">
      {labels.map((text, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, x: -30, rotate: -90 }}
          animate={{ opacity: 1, x: 0, rotate: -90 }}
          transition={{
            duration: 0.7,
            delay: 1.0 + idx * 0.15,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="text-[10px] tracking-[0.3em] text-black/50 font-semibold uppercase whitespace-nowrap block"
        >
          {text}
        </motion.span>
      ))}
    </div>
  );
}
