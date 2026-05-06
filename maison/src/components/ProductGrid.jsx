import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { products } from '../data/bikes';

export default function ProductGrid({ accentColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax for the section header
  const headerY = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section
      id="products"
      ref={(el) => {
        ref.current = el;
        sectionRef.current = el;
      }}
      className="relative bg-white py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header — parallax driven */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={isInView ? { opacity: 1, letterSpacing: '0.35em' } : {}}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="text-[11px] tracking-[0.35em] text-black/40 font-semibold uppercase block mb-4"
          >
            Featured
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold tracking-tight"
          >
            Choose Your Ride
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 80, scale: 0.92 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + idx * 0.15,
                ease: [0.25, 1, 0.5, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <motion.div
                className="relative aspect-square bg-[#f2f2f2] rounded-sm overflow-hidden mb-5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Default image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-6 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:opacity-0"
                />
                {/* Hover image */}
                <img
                  src={product.hoverImage}
                  alt={`${product.name} alternate`}
                  className="absolute inset-0 w-full h-full object-contain p-6 transition-all duration-500 ease-out scale-[0.97] opacity-0 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                {/* Shadow overlay on hover */}
                <div className="absolute inset-0 shadow-none transition-shadow duration-500 group-hover:shadow-[inset_0_-40px_40px_-20px_rgba(0,0,0,0.05)]" />

                {/* Quick view badge on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-3"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold bg-black text-white px-4 py-2 rounded-full">
                    Quick View
                  </span>
                </motion.div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
                className="flex items-start justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold tracking-widest uppercase mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-black/40 font-medium">
                    {product.price}
                  </p>
                </div>
                <span className="relative text-xs font-semibold tracking-widest uppercase text-black/60 mt-0.5">
                  Configure
                  <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
                </span>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.15 }}
                className="text-xs text-black/30 mt-2 tracking-wide"
              >
                {product.tagline}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
