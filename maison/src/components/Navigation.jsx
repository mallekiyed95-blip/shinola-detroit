import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, ShoppingCart, Menu } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'COLLECTION', href: '#collection' },
    { label: 'BIKES', href: '#products' },
    { label: 'CRAFT', href: '#craftsmanship' },
    { label: 'SPECS', href: '#specs' },
    { label: 'PRESS', href: '#press' },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className={`w-full fixed top-0 left-0 flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'py-4 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)] text-black'
          : 'py-8 bg-transparent mix-blend-difference text-white'
      }`}
    >
      {/* Brand */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <a href="#hero" className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase hover:opacity-80 transition-opacity">
          Shinola Detroit
        </a>
      </motion.div>

      {/* Main Links */}
      <div className="hidden md:flex flex-1 justify-center space-x-8">
        {navItems.map((item, idx) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + idx * 0.07, ease: [0.25, 1, 0.5, 1] }}
            className="text-sm font-medium tracking-widest relative overflow-hidden group py-1"
          >
            {item.label}
            <span
              className={`absolute bottom-0 left-0 w-full h-[1px] transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 ${
                scrolled ? 'bg-black' : 'bg-white'
              }`}
            />
          </motion.a>
        ))}
      </div>

      {/* Icons */}
      <motion.div
        className="flex-1 flex justify-end space-x-6 items-center"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <button className="hover:opacity-70 transition-opacity hover:scale-110 active:scale-95 duration-200">
          <Search size={20} />
        </button>
        <button className="hover:opacity-70 transition-opacity hidden md:block hover:scale-110 active:scale-95 duration-200">
          <Star size={20} />
        </button>
        <button className="relative hover:opacity-70 transition-opacity hover:scale-110 active:scale-95 duration-200">
          <ShoppingCart size={20} />
          <span
            className={`absolute -top-1.5 -right-2 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-500 ${
              scrolled ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            2
          </span>
        </button>
        <button className="md:hidden ml-4">
          <Menu size={24} />
        </button>
      </motion.div>
    </motion.nav>
  );
}
