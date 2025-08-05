// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../assets/images/logo.png';

export default function Navbar() {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    // Define a hash inicial
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    onHashChange(); // para capturar se já veio com # algo
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <header className="navbar">
      <img src={Logo} alt="Logo Bronzeamento" className="navbar__logo" />
      <nav className="navbar__menu">
        <a href="#carousel" className={activeHash === '#carousel' ? 'active' : ''}>Home</a>
        <a href="#about"    className={activeHash === '#about'    ? 'active' : ''}>Sobre</a>
        <a href="#map"      className={activeHash === '#map'      ? 'active' : ''}>Localização</a>
        <a href="#services" className={activeHash === '#services' ? 'active' : ''}>Serviços</a>
        <a href="#contato"  className={activeHash === '#contato'  ? 'active' : ''}>Contato</a>
      </nav>
    </header>
  );
}
