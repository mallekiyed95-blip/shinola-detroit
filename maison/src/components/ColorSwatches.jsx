import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../data/bikes';

export default function ColorSwatches({ activeColor, onChange }) {
  return (
    <div className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 flex flex-col md:flex-col space-x-4 md:space-x-0 md:space-y-6 z-40 max-md:top-auto max-md:bottom-32 max-md:right-1/2 max-md:translate-x-1/2 max-md:translate-y-0 max-md:flex-row max-md:items-center">
      {colors.map((color, idx) => {
        const isActive = activeColor.id === color.id;
        return (
          <motion.button
            key={color.id}
            onClick={() => onChange(color)}
            initial={{ opacity: 0, x: 30, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.2 + idx * 0.08,
              ease: [0.25, 1, 0.5, 1],
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex items-center justify-center outline-none"
            aria-label={`Select ${color.name} color`}
          >
            {/* Tooltip for desktop only */}
            <span className="hidden md:block absolute right-10 text-[10px] tracking-widest uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black text-white px-2 py-1 rounded">
              {color.name}
            </span>
            <motion.div
              animate={{
                width: isActive ? 32 : 24,
                height: isActive ? 32 : 24,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="rounded-full flex border border-black/10 items-center justify-center p-1"
            >
              <div
                className="w-full h-full rounded-full shadow-inner"
                style={{ backgroundColor: color.hex }}
              />
            </motion.div>
          </motion.button>
        );
      })}
    </div>
  );
}
