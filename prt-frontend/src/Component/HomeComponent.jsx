import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import profileImg from './images/rajesh2.jpg';

const HomeComponent = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ['Java-FullStack Developer', 'AI Explorer', 'Code Explorer', 'Problem Solver', 'Front-End Developer', 'Back-End Developer'];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <p className="hero-intro">Hello, I'm Rajeshkumar 👋</p>
          <h1 className="hero-title">
            {displayText}
            <span className={`cursor ${showCursor ? 'visible' : ''}`}></span>
          </h1>
          <p className="hero-subtitle">Expanding skills and discovering new ways to innovate</p>
          
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp />
            </a>
          </div>

          <a href="https://drive.google.com/file/d/1CqxxThKEV1W2brvodoGMqOl2rofFETQ3/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn-cv" style={{textDecoration: 'none', display: 'inline-block'}}>DOWNLOAD CV</a>
        </div>
        
        <div className="profile-image-container">
          <img src={profileImg} alt="Rajeshkumar" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
