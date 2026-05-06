import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { pressLogos, testimonials } from '../data/bikes';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeQuote, setActiveQuote] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setActiveQuote((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setActiveQuote((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.95 }),
  };

  return (
    <section
      id="press"
      ref={ref}
      className="relative bg-[#F8F8F8] py-[100px] px-6 overflow-hidden"
    >
      {/* Background Watermark with fade-in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <span className="text-[280px] md:text-[400px] font-serif text-black/[0.03] leading-none block">
          &ldquo;
        </span>
      </motion.div>

      <div className="max-w-[900px] mx-auto relative z-10">
        {/* Press Logos — staggered bounce-in */}
        <div className="flex items-center justify-center gap-8 md:gap-14 mb-20 flex-wrap">
          {pressLogos.map((logo, idx) => (
            <motion.span
              key={logo.name}
              initial={{ opacity: 0, y: 30, scale: 0.7 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              whileHover={{ scale: 1.15, color: '#000', transition: { duration: 0.2 } }}
              className={`${logo.width} font-bold tracking-[0.15em] text-black/20 cursor-default select-none transition-colors duration-400`}
            >
              {logo.name}
            </motion.span>
          ))}
        </div>

        {/* Quote Carousel — directional slide */}
        <div className="text-center min-h-[200px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeQuote}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center"
            >
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black/70 italic max-w-[700px] mb-8"
              >
                &ldquo;{testimonials[activeQuote].quote}&rdquo;
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="text-sm font-bold tracking-widest uppercase block">
                  {testimonials[activeQuote].author}
                </span>
                <span className="text-xs text-black/35 tracking-wide">
                  {testimonials[activeQuote].title}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </motion.button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeQuote ? 1 : -1);
                  setActiveQuote(idx);
                }}
                animate={{
                  width: idx === activeQuote ? 24 : 8,
                  backgroundColor: idx === activeQuote ? '#000' : 'rgba(0,0,0,0.2)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="h-2 rounded-full"
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
