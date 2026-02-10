import React, { useState } from 'react';
import './Header.css';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-white">Rajeshkumar__</span>
          <span className="logo-red">S</span>
        </div>
        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { setIsOpen(false); setActiveLink('home'); }}>Home</a>
          <a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => { setIsOpen(false); setActiveLink('about'); }}>About</a>
          <a href="#projects" className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={() => { setIsOpen(false); setActiveLink('projects'); }}>Projects</a>
          <a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => { setIsOpen(false); setActiveLink('contact'); }}>Contact</a>
        </nav>
        <div className="header-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="header-social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="header-social-icon">
            <FaGithub />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="header-social-icon">
            <FaWhatsapp />
          </a>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
