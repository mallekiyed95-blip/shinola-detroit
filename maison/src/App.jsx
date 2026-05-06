import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ColorSwatches from './components/ColorSwatches';
import InfoLabels from './components/InfoLabels';
import CollectionIntro from './components/CollectionIntro';
import ProductGrid from './components/ProductGrid';
import Craftsmanship from './components/Craftsmanship';
import Specifications from './components/Specifications';
import Editorial from './components/Editorial';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { colors } from './data/bikes';

function App() {
  const [activeColor, setActiveColor] = useState(colors[0]);

  // Auto-cycle colors every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColor(prev => {
        const currentIndex = colors.findIndex(c => c.id === prev.id);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeColor]);

  return (
    <div className="w-full">
      <Navigation />

      {/* ═══════════════════════════════════════════
          SECTION 1: HERO — Bike Configurator
      ═══════════════════════════════════════════ */}
      <motion.section
        id="hero"
        className="relative w-full overflow-hidden flex flex-col justify-center items-center font-sans h-[100dvh]"
        animate={{ backgroundColor: activeColor.bg }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        <InfoLabels />

        {/* Background radial gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent pointer-events-none"
        />

        {/* Scroll-down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40 pointer-events-none"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-black/30 font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-6 bg-black/20"
          />
        </motion.div>

        {/* Main Product Display */}
        <div className="relative w-full h-[70vh] max-w-[1400px] mx-auto flex items-center justify-center mt-12 md:mt-0 px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${activeColor.id}`}
              src={activeColor.image}
              alt={activeColor.name}
              initial={{ opacity: 0, x: 100, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -100, scale: 0.95, filter: 'blur(5px)' }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="w-full h-full object-contain max-w-6xl mix-blend-multiply drop-shadow-2xl z-20 pointer-events-none"
            />
          </AnimatePresence>
        </div>

        {/* Bottom Left Item Code */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-40 pointer-events-none"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeColor.itemCode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] md:text-xs tracking-[0.2em] text-black/50 font-semibold uppercase"
            >
              {activeColor.itemCode}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Bottom Right Color Name Label */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-40 pointer-events-none text-right"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeColor.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] md:text-xs tracking-[0.2em] text-black/90 font-semibold uppercase"
            >
              {activeColor.name}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <ColorSwatches activeColor={activeColor} onChange={setActiveColor} />
      </motion.section>

      {/* ═══════════════════════════════════════════
          SECTION 2: Collection Intro
      ═══════════════════════════════════════════ */}
      <CollectionIntro />

      {/* ═══════════════════════════════════════════
          SECTION 3: Featured Product Grid
      ═══════════════════════════════════════════ */}
      <ProductGrid accentColor={activeColor} />

      {/* ═══════════════════════════════════════════
          SECTION 4: Craftsmanship / Process
      ═══════════════════════════════════════════ */}
      <Craftsmanship />

      {/* ═══════════════════════════════════════════
          SECTION 5: Specifications
      ═══════════════════════════════════════════ */}
      <Specifications />

      {/* ═══════════════════════════════════════════
          SECTION 6: Editorial / Lifestyle
      ═══════════════════════════════════════════ */}
      <Editorial />

      {/* ═══════════════════════════════════════════
          SECTION 7: Press / Testimonials
      ═══════════════════════════════════════════ */}
      <Testimonials />

      {/* ═══════════════════════════════════════════
          SECTION 8: Newsletter + Footer
      ═══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}

export default App;
