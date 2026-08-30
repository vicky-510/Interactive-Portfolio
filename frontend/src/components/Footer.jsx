// import React from 'react';
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaWhatsapp, FaGithub, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { href: 'https://www.linkedin.com/in/vwaran', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://api.whatsapp.com/send?phone=8189950272', label: 'WhatsApp', icon: FaWhatsapp },
  { href: 'https://github.com/vicky-510', label: 'GitHub', icon: FaGithub },
  { href: 'https://leetcode.com/u/vicky510/', label: 'LeetCode', icon: SiLeetcode },
];

const quickLinks = [
  { to: '/#About', label: 'About' },
  { to: '/#Service', label: 'Services' },
  { to: '/#Contact', label: 'Contact' },
  { to: '/VoicePort', label: 'VoicePort' },
];

function Footer() {
  const getFullYear = () => new Date().getFullYear();

  return (
    <>
      <footer className="footer-v2">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-col-brand">
              <p className="footer-brand">Vwaran</p>
              <p className="footer-bio">
                Expert in crafting responsive and user-friendly websites. Offering professional
                web development services to elevate your online presence. Let&rsquo;s collaborate
                and bring your vision to life.
              </p>
              <div className="footer-social-row">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="about-social-icon" aria-label={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Links</h4>
              <ul className="footer-link-list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <HashLink to={link.to} className="footer-link-v2" smooth>{link.label}</HashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <FaPhoneAlt size={15} className="footer-contact-icon" />
                  <a href="tel:+918189950272" className="footer-link-v2">+91 8189950272</a>
                </li>
                <li>
                  <FaMailBulk size={16} className="footer-contact-icon" />
                  <a href="mailto:vignesh510510@gmail.com" className="footer-link-v2">vignesh510510@gmail.com</a>
                </li>
                <li>
                  <FaMapMarkerAlt size={16} className="footer-contact-icon" />
                  <span className="footer-link-v2">K.Pudur, Madurai</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="footer-copyright">Copyright &copy; {getFullYear()} Vigneshwaran M. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
