// import React from 'react';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Container } from 'react-bootstrap';
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosApps } from 'react-icons/io';
import { StaggerGrid, StaggerItem } from './motion/StaggerGrid';

const experiences = [
  {
    accent: 'gold',
    title: 'Jr. Software Engineer',
    organization: 'MBF Digital Production Services Private Ltd, Chennai',
    period: '07/2024 - Present',
    bullets: [
      'Developing dynamic user interfaces with Angular and building server-side applications using Node.js.',
      'Design and manage MySQL databases, writing optimized SQL queries for efficient data handling.',
      'Collaborate with cross-functional teams and senior developers, to deliver high-quality applications.',
    ],
    skills: ['Angular', 'Node.js', 'MySQL', 'MongoDB'],
  },
  {
    accent: 'lime',
    title: 'Trainee Programmer',
    organization: 'Webstix Design Private Ltd, Chennai',
    period: '09/2023 - 04/2024',
    bullets: [
      'Developed responsive web applications using React and Strapi, ensuring optimal usability across various devices and screen sizes.',
      'Collaborated with cross-functional teams to address complex programming challenges and implement innovative solutions.',
      'Contributed to the optimization of web application performance through thorough code review and debugging processes.',
    ],
    skills: ['React.js', 'Node.js', 'Strapi', 'MySQL'],
  },
  {
    accent: 'teal',
    title: 'App Developer Intern',
    organization: 'NilaApps Private Ltd, Chennai',
    period: '03/2023 - 05/2023',
    bullets: [
      'Led the design and development of an Android app, showcasing proficiency in Java for Android app development and expertise in data gathering and processing from JSON files.',
      'Performed comprehensive user experience research, utilizing analytical skills to collect feedback, analyze user behavior, and identify areas for significant improvement.',
      'Proactively resolved complex issues in the Android app through debugging and troubleshooting, ensuring flawless functionality, seamless user interactions, and exceptional user satisfaction.',
    ],
    skills: ['Core Java', 'XML', 'JSON'],
  },
];

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.6'],
  });

  return (
    <>
      <div id="Experience" className="rem-space"></div>
      <section className="portfolio-block cv portfolio_css1">
        <Container>
          <div className="heading text-center exp-css1">
            <h2 className='exp-head-css1'>EXPERIENCE</h2>
          </div>

          <div className="timeline" ref={timelineRef}>
            <div className="timeline-track" />
            <motion.div className="timeline-progress" style={{ scaleY: scrollYProgress }} />

            <StaggerGrid className="timeline-items">
              {experiences.map((exp) => (
                <StaggerItem
                  className={`timeline-item timeline-accent-${exp.accent}`}
                  key={exp.title}
                >
                  <div className="timeline-marker" />
                  <div className="timeline-card">
                    <span className="timeline-period">{exp.period}</span>
                    <h3 className='exp-title'>{exp.title}</h3>
                    <h4 className={`organization organiz-exp-${exp.accent}`}>{exp.organization}</h4>
                    <hr className='common-hr' />

                    {exp.bullets.map((bullet) => (
                      <p className='common-letterSpace' key={bullet}>
                        <span className={`exp-bullet-icon star-design-${exp.accent}`}>
                          <FaCheckCircle size={14} />
                        </span>
                        {bullet}
                      </p>
                    ))}

                    <p className='common-letterSpace2'>
                      <span className={`exp-bullet-icon star-design-${exp.accent}`}>
                        <IoIosApps size={16} />
                      </span>
                      Skills:
                      {exp.skills.map((skill) => (
                        <span className='project-skill-desc exp-skill-pill' key={skill}>{skill}</span>
                      ))}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Experience;
