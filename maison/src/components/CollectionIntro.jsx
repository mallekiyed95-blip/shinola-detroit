import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function CollectionIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax on the decorative line
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ['0%', '100%']);

  // Word-by-word animation for the headline
  const headlineWords = ['Crafted', 'for', 'the', 'city.'];
  const headlineWords2 = ['Built', 'to', 'last.'];

  return (
    <section
      id="collection"
      ref={(el) => {
        ref.current = el;
        sectionRef.current = el;
      }}
      className="relative bg-[#F8F8F8] py-[120px] px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative scroll-driven line */}
      <motion.div
        className="absolute top-[50%] left-0 h-[1px] bg-black/5"
        style={{ width: lineWidth }}
      />

      <div className="max-w-[520px] text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-[11px] tracking-[0.35em] text-black/40 font-semibold uppercase block mb-6"
        >
          The Collection
        </motion.span>

        {/* Headline — word by word reveal */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-1">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="inline-block mr-[0.3em]"
              style={{ perspective: '600px' }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-6">
          {headlineWords2.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="inline-block mr-[0.3em]"
              style={{ perspective: '600px' }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="w-12 h-[1px] bg-black/20 mx-auto mb-6 origin-center"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg leading-relaxed text-black/50 mb-10"
        >
          Every bicycle in our collection is hand-assembled in Detroit using
          premium materials and time-honored techniques. No shortcuts.
          No compromises. Just craft.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          whileHover={{ x: 5 }}
          className="group inline-flex items-center text-sm font-semibold tracking-widest uppercase text-black relative"
        >
          Explore the Collection
          <motion.span
            className="ml-3 text-lg"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            →
          </motion.span>
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </motion.a>
      </div>
    </section>
  );
}
