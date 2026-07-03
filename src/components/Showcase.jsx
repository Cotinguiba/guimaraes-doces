import React from 'react';
import { motion } from 'motion/react';
import './Showcase.css';

const products = [
  { id: 1, name: 'Cupcake Mágico', desc: 'Massa de baunilha com cobertura de morango.', emoji: '🧁', color: '#FFB6C1' },
  { id: 2, name: 'Pirulito Colorido', desc: 'Diversão em espiral com sabor de infância.', emoji: '🍭', color: '#87CEFA' },
  { id: 3, name: 'Barra de Chocolate', desc: 'Chocolate belga derretendo na boca.', emoji: '🍫', color: '#D2B48C' },
  { id: 4, name: 'Donut Recheado', desc: 'Recheio de creme com granulado.', emoji: '🍩', color: '#FFDAB9' }
];

const Showcase = () => {
  return (
    <section className="showcase">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="showcase-header"
      >
        <h2>As Nossas Especialidades</h2>
        <p>Tudo feito artesanalmente com muito amor para adoçar seu dia.</p>
      </motion.div>

      <div className="showcase-grid">
        {products.map((prod, i) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="product-card"
          >
            <div className="product-icon" style={{ backgroundColor: prod.color }}>
              {prod.emoji}
            </div>
            <h3>{prod.name}</h3>
            <p>{prod.desc}</p>
            <button className="buy-button">Eu Quero!</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
