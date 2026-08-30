// import React from 'react';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import vignesh from '../assets/img/vignesh-hero.webp'
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import '../assets/styles/Main.css';

const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 6, suffix: '+', label: 'Projects Built' },
];

const useCountUp = (target, shouldStart, duration = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = null;
    let frameId;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [shouldStart, target, duration]);

  return count;
};

const AnimatedStat = ({ stat, shouldStart }) => {
  const count = useCountUp(stat.value, shouldStart);
  return (
    <div className="about-stat">
      <span className="about-stat-value">{count}{stat.suffix}</span>
      <span className="about-stat-label">{stat.label}</span>
    </div>
  );
};

AnimatedStat.propTypes = {
  stat: PropTypes.shape({
    value: PropTypes.number.isRequired,
    suffix: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  shouldStart: PropTypes.bool.isRequired,
};

const About = () => {
  const resumeLink = 'https://drive.google.com/file/d/12QBfYCkkbNPl4JGVmqc5RAbS9d5r1DwO/view';
  const sectionRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="About" className="rem-space"></div>
      <section className='about-section-v2 about-hero'>
        <Container>
          <div className="about-grid" ref={sectionRef}>
            <div className="about-content-col">
              <span className="about-eyebrow">SOFTWARE ENGINEER · MERN / MEAN</span>
              <h1 className="about-heading about-heading-hero">Hi, I&apos;m Vigneshwaran M</h1>
              <p className="about-bio">
                A software engineer from Chennai who builds fast, reliable web applications
                end to end &mdash; from responsive Angular/React interfaces to Node.js APIs and
                MongoDB/MySQL-backed services. I care about clean code, thoughtful UX, and
                shipping things that actually work.
              </p>

              <div className="about-stats-row">
                {stats.map((stat) => (
                  <AnimatedStat stat={stat} shouldStart={statsInView} key={stat.label} />
                ))}
              </div>

              <div className='about-social-row'>
                <a href="https://github.com/vicky-510" target="_blank" rel="noopener noreferrer" className='about-social-icon about-social-icon-onlight' aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vwaran" target="_blank" rel="noopener noreferrer" className='about-social-icon about-social-icon-onlight' aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer" className='about-social-icon about-social-icon-onlight' aria-label="WhatsApp">
                  <FaWhatsapp size={20} />
                </a>
              </div>

              <div className="about-actions-row">
                <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer" className='about-decor-none' aria-label="Message on WhatsApp">
                  <Button className="about-btn-primary">
                    Message Me
                  </Button>
                </a>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer" className='about-decor-none about-btn-outline' aria-label="Download CV" download>
                  Download CV <FaDownload size={15} className='about-btn-css-icon' />
                </a>
              </div>

              <p className="about-hire-note">
                Have a project in mind? <HashLink to="/#Contact" smooth>Let&rsquo;s talk about it &rarr;</HashLink>
              </p>
            </div>

            <div className="about-photo-col">
              <img className="about-photo-full" src={vignesh} alt="Vigneshwaran M working on a laptop" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
