import React from 'react';
import { motion } from 'motion/react';
import { Gift, Star, Heart } from '@phosphor-icons/react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="hero-badge"
        >
          <Star size={20} weight="fill" color="var(--color-pink)" />
          <span>Feito com muito amor</span>
          <Star size={20} weight="fill" color="var(--color-pink)" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Guimarães Doces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Descubra o Mundo Mágico dos Doces. Onde cada mordida traz uma lembrança doce e inesquecível.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="cta-button"
        >
          <Gift size={24} />
          Ver Nossas Delícias
        </motion.button>
      </div>

      <div className="hero-decorations">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="floating-candy candy-1"
        >
          🍬
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -15, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="floating-candy candy-2"
        >
          🍭
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 2 }}
          className="floating-candy candy-3"
        >
          🍫
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
