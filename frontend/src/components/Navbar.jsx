import { useEffect, useState } from 'react';
import { HashLink } from "react-router-hash-link";
import logo from '../assets/img/logo_waran.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: '/#About', label: 'Home' },
  { to: '/#Projects', label: 'Projects' },
  { to: '/#Experience', label: 'Experience' },
  { to: '/#Hackathon', label: 'Hackathon' },
  { to: '/#Skills', label: 'Skills' },
  { to: '/#Service', label: 'Service' },
  { to: '/#Contact', label: 'Contact' },
  { to: '/VoicePort', label: 'Voice Port' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => setIsOpen((prev) => !prev);
  const closeNavbar = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className={`nav-glass ${isScrolled ? 'nav-glass-scrolled' : ''}`}>
        <div className="nav-glass-inner">
          <HashLink to="/" className="nav-brand" onClick={closeNavbar}>
            <img src={logo} className="nav-brand-img" alt="website logo" />
          </HashLink>

          <ul className="nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.label}>
                <HashLink to={link.to} className="nav-link-modern" smooth>
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>

          <button
            className={`nav-hamburger ${isOpen ? 'nav-hamburger-open' : ''}`}
            type="button"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`nav-drawer-backdrop ${isOpen ? 'nav-drawer-backdrop-open' : ''}`}
        onClick={closeNavbar}
        aria-hidden="true"
      />

      <div className={`nav-drawer ${isOpen ? 'nav-drawer-open' : ''}`}>
        <button className="nav-drawer-close" type="button" onClick={closeNavbar} aria-label="Close navigation">
          <FaTimes size={18} />
        </button>

        <ul className="nav-drawer-links">
          {navLinks.map((link, i) => (
            <li key={link.label} style={{ transitionDelay: `${isOpen ? i * 50 : 0}ms` }}>
              <HashLink to={link.to} className="nav-drawer-link" smooth onClick={closeNavbar}>
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>

        <div className="nav-drawer-socials">
          <a href="https://github.com/vicky-510" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar;
