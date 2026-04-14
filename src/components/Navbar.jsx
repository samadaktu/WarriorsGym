import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ onTrialClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/classes', label: 'Classes' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon">
              <svg viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2L36 8V22C36 31.5 29 39.5 20 42C11 39.5 4 31.5 4 22V8L20 2Z" fill="rgba(166,255,0,0.15)" stroke="#A6FF00" strokeWidth="1.5"/>
                <path d="M14 20.5L17.5 24L26 16" stroke="#A6FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11V17M17 14H23" stroke="#A6FF00" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">Warriors</span>
              <span className="nav-logo-sub">Gym Dublin</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`nav-link ${isActive(path) ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="nav-cta">
            <a href="tel:+35312345678" className="nav-phone">
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +353 1 234 5678
            </a>
            <button className="btn-trial" onClick={onTrialClick}>
              Free Trial
              <span className="btn-arrow">→</span>
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {navLinks.map(({ path, label }, i) => (
            <Link
              key={path}
              to={path}
              className={`mobile-link ${isActive(path) ? 'active' : ''}`}
              style={{ '--d': `${i * 60}ms` }}
            >
              {label}
            </Link>
          ))}
          <button className="mobile-trial-btn" onClick={() => { onTrialClick(); toggleMenu(); }}>
            Book Free Trial
          </button>
        </div>
      </div>
    </>
  );
}
