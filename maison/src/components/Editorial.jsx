import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Editorial() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6]);
  const textY = useTransform(scrollYProgress, [0.3, 0.7], [60, 0]);

  return (
    <section
      ref={sectionRef}
      id="editorial"
      className="relative h-[70vh] overflow-hidden flex items-end"
    >
      {/* Background Image with Parallax + Scale */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src="/lifestyle.png"
          alt="Cyclist riding through the city at golden hour"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Gradient Overlay — scroll-reactive */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content — scroll-driven vertical movement */}
      <motion.div
        className="relative z-10 px-8 md:px-16 pb-16 md:pb-20 max-w-[600px]"
        style={{ y: textY }}
      >
        <motion.span
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-[11px] tracking-[0.35em] text-white/50 font-semibold uppercase block mb-4"
        >
          The Ride
        </motion.span>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          {'Own the streets.'.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-12 h-[1px] bg-white/30 mt-5 mb-4 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base text-white/60 max-w-[400px] leading-relaxed"
        >
          From morning commutes to midnight rides — designed for every
          moment the city throws at you.
        </motion.p>
      </motion.div>
    </section>
  );
}
