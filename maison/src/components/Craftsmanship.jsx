import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Hexagon, Hand, Shield } from 'lucide-react';

const highlights = [
  { icon: Hexagon, label: 'Chromoly Frame', desc: 'Aircraft-grade steel tubing' },
  { icon: Hand, label: 'Leather Grips', desc: 'Hand-stitched Horween leather' },
  { icon: Shield, label: 'Lifetime Warranty', desc: 'Built to outlast trends' },
];

export default function Craftsmanship() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: '-100px' });
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: '-50px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section
      ref={sectionRef}
      id="craftsmanship"
      className="relative min-h-[80vh] bg-white overflow-hidden"
    >
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left: Image with clip-path reveal */}
        <div
          ref={imageRef}
          className="relative w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden"
        >
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={imageInView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0"
          >
            <motion.img
              src="/craftsmanship.png"
              alt="Craftsman welding a bicycle frame in the Detroit workshop"
              className="absolute inset-0 w-full h-[110%] object-cover"
              style={{ y: imageY, scale: imageScale }}
            />
          </motion.div>
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5" />

          {/* Floating badge on the image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-sm"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-black/60">
              Est. 2011 · Detroit, MI
            </span>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0"
        >
          <div className="max-w-[480px]">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="text-[11px] tracking-[0.35em] text-black/40 font-semibold uppercase block mb-5"
            >
              Made in Detroit
            </motion.span>

            {/* Headline — character stagger */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-black mb-6"
            >
              {'Built by hand.'.split(' ').map((word, i) => (
                <motion.span
                  key={`w1-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.07 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {'Designed for life.'.split(' ').map((word, i) => (
                <motion.span
                  key={`w2-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-16 h-[1px] bg-black/15 mb-6 origin-left"
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base leading-relaxed text-black/45 mb-12"
            >
              Every frame is hand-welded, every component hand-selected. Our
              Detroit workshop employs master builders who bring decades of
              experience to each bicycle — because the best things in life
              are never rushed.
            </motion.p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + idx * 0.12,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="text-center md:text-left cursor-default"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="mx-auto md:mx-0 mb-3 text-black/70"
                      />
                    </motion.div>
                    <h4 className="text-xs font-bold tracking-widest uppercase mb-1">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-black/35 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
