import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { products } from '../data/bikes';
import { ChevronDown } from 'lucide-react';

const specRows = ['frame', 'fork', 'drivetrain', 'brakes', 'weight', 'wheels'];
const specLabels = {
  frame: 'Frame',
  fork: 'Fork',
  drivetrain: 'Drivetrain',
  brakes: 'Brakes',
  weight: 'Weight',
  wheels: 'Wheels',
};

export default function Specifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <section
      id="specs"
      ref={ref}
      className="relative bg-[#FAFAFA] py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={isInView ? { opacity: 1, letterSpacing: '0.35em' } : {}}
            transition={{ duration: 1 }}
            className="text-[11px] tracking-[0.35em] text-black/40 font-semibold uppercase block mb-4"
          >
            Compare
          </motion.span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Specifications
          </h2>
        </motion.div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          {/* Table Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-4 gap-0 border-b-2 border-black/10 pb-4 mb-0"
          >
            <div />
            {products.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className={`text-center ${idx === 0 ? 'border-l-2 border-black pl-4' : ''}`}
              >
                <span className="text-xs font-bold tracking-widest uppercase">
                  {p.name}
                </span>
                <span className="block text-[11px] text-black/35 mt-1">
                  {p.price}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Table Rows — staggered slide-in from alternating sides */}
          {specRows.map((key, rowIdx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: rowIdx % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + rowIdx * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={`grid grid-cols-4 gap-0 py-4 ${
                rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'
              } ${rowIdx < specRows.length - 1 ? 'border-b border-black/5' : ''}`}
            >
              <div className="flex items-center pl-4">
                <span className="text-[11px] tracking-[0.2em] text-black/40 font-semibold uppercase">
                  {specLabels[key]}
                </span>
              </div>
              {products.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + rowIdx * 0.08 + idx * 0.05 }}
                  className={`text-center flex items-center justify-center ${
                    idx === 0 ? 'border-l-2 border-black pl-4' : ''
                  }`}
                >
                  <span className="text-sm text-black/70">
                    {p.specs[key]}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3">
          {products.map((product, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }}
                whileHover={{ scale: 1.01 }}
                className="border border-black/10 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#FAFAFA] transition-colors"
                >
                  <div className="text-left">
                    <span className="text-sm font-bold tracking-widest uppercase block">
                      {product.name}
                    </span>
                    <span className="text-xs text-black/35">{product.price}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <ChevronDown size={18} className="text-black/40" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 space-y-3">
                        {specRows.map((key, specIdx) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: specIdx * 0.05 }}
                            className="flex justify-between items-center py-2 border-b border-black/5 last:border-0"
                          >
                            <span className="text-[11px] tracking-[0.2em] text-black/40 font-semibold uppercase">
                              {specLabels[key]}
                            </span>
                            <span className="text-sm text-black/70">
                              {product.specs[key]}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
