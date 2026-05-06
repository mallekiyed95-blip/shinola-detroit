import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const footerLinks = {
  Shop: ['Bikes', 'Accessories', 'Gifts', 'Sale'],
  Company: ['About', 'Careers', 'Press', 'Journal'],
  Support: ['Contact', 'Shipping', 'Returns', 'FAQ'],
  Social: ['Instagram', 'Twitter', 'Facebook', 'YouTube'],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer id="footer" ref={ref} className="bg-[#111] text-[#888]">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-[500px] mx-auto px-6 py-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={isInView ? { opacity: 1, letterSpacing: '0.35em' } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[11px] tracking-[0.35em] text-white/30 font-semibold uppercase block mb-8"
          >
            Stay in the Know
          </motion.span>

          <form onSubmit={handleSubmit} className="relative flex items-center">
            <motion.input
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent border-0 border-b border-white/15 text-white text-sm tracking-wide py-3 pr-12 focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
            />
            <motion.button
              type="submit"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ x: 4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 bottom-3 text-white/40 hover:text-white transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Footer Grid — staggered column reveal */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {Object.entries(footerLinks).map(([category, links], colIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + colIdx * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <h4 className="text-[11px] tracking-[0.25em] text-white/50 font-semibold uppercase mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIdx) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + colIdx * 0.1 + linkIdx * 0.05,
                    }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-[#666] hover:text-white transition-colors duration-300 hover:pl-1"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="border-t border-white/5"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/20 tracking-wide">
            © {new Date().getFullYear()} Shinola Detroit. All rights reserved.
          </span>

          {/* Payment Icons (text-based) */}
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((method, idx) => (
              <motion.span
                key={method}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + idx * 0.08 }}
                className="text-[10px] tracking-wider text-white/15 uppercase font-medium border border-white/10 px-2 py-1 rounded hover:border-white/25 hover:text-white/30 transition-all duration-300"
              >
                {method}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
