import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './css/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__name">Narongsak Mueandao</div>
      <button
        className="header__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`header__nav${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><Link to="/about" className="header__link" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
          <li><Link to="/resume" className="header__link" onClick={() => setMenuOpen(false)}>RESUME</Link></li>
          <li><Link to="/project" className="header__link" onClick={() => setMenuOpen(false)}>PROJECTS</Link></li>
          <li><Link to="/contact" className="header__link" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}
