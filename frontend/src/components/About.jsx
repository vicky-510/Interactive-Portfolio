// import React from 'react';
import { Container, Button } from 'react-bootstrap';
import vignesh from '../assets/img/hackathon-vignesh.webp'
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import '../assets/styles/Main.css';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '6+', label: 'Projects Built' },
];

const About = () => {
  const resumeLink = 'https://drive.google.com/file/d/12QBfYCkkbNPl4JGVmqc5RAbS9d5r1DwO/view';

  return (
    <>
      <div id="About" className="rem-space"></div>
      <section className='about-section-v2'>
        <Container>
          <h2 className="text-center about-title-v2">ABOUT ME</h2>

          <div className="about-grid">
            <div className="about-content-col">
              <span className="about-eyebrow">JR. SOFTWARE ENGINEER · MERN / MEAN</span>
              <h3 className="about-heading">Hi, I&apos;m Vigneshwaran M</h3>
              <p className="about-bio">
                A software engineer from Chennai who builds fast, reliable web applications
                end to end &mdash; from responsive Angular/React interfaces to Node.js APIs and
                MongoDB/MySQL-backed services. I care about clean code, thoughtful UX, and
                shipping things that actually work.
              </p>

              <div className="about-stats-row">
                {stats.map((stat) => (
                  <div className="about-stat" key={stat.label}>
                    <span className="about-stat-value">{stat.value}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="about-actions-row">
                <a href="https://api.whatsapp.com/send?phone=8189950272" target="_blank" rel="noopener noreferrer" className='about-decor-none' aria-label="Message on WhatsApp">
                  <Button className="about-btn-primary">
                    Message Me
                  </Button>
                </a>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer" className='about-decor-none' aria-label="Download CV" download>
                  <Button className="about-btn-outline">
                    Download CV <FaDownload size={15} className='about-btn-css-icon' />
                  </Button>
                </a>
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
            </div>

            <div className="about-photo-col">
              <img className="about-photo-full" src={vignesh} alt="Vigneshwaran M at a hackathon" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
