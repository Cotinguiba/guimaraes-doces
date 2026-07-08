import React from 'react';
import './Footer.css';
import { Heart } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Guimarães Doces</h2>
        <p>Adoçando a sua vida desde 2024.</p>
        <div className="made-with">
          Feito com <Heart size={20} weight="fill" color="var(--color-pink)" /> por Guimares
        </div>
      </div>
    </footer>
  );
};

export default Footer;
