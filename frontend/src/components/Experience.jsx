// import React, { useState } from 'react';
import { useState } from 'react';
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cert from '../assets/img/intern_cert.webp';
import { PiCertificateDuotone } from "react-icons/pi";

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
    hasCertificate: true,
  },
];

const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const toggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };

  const certIcon = <PiCertificateDuotone size={25} className='icon cert_css1' />;

  return (
    <>
      <div id="Experience" className="rem-space"></div>
      <section className="portfolio-block cv portfolio_css1">
        <div className="container exp-size">
          <div className="heading text-center exp-css1">
            <h2 className='exp-head-css1'>EXPERIENCE</h2>
          </div>

          <div className="timeline">
            {experiences.map((exp, i) => (
              <div
                className={`timeline-item timeline-accent-${exp.accent} timeline-delay-${i}`}
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
                      <strong className={`star-design-${exp.accent}`}>★</strong> {bullet}
                    </p>
                  ))}

                  <p className='common-letterSpace2'>
                    <strong className={`star-design-${exp.accent}`}>★</strong> Skills:
                    {exp.skills.map((skill) => (
                      <span className='skill-2_1' key={skill}>{skill}</span>
                    ))}
                  </p>

                  {exp.hasCertificate && (
                    <>
                      <button className="btn btn-green mx-auto d-block" onClick={toggleCertificate}>
                        <span className='common-letterSpace1'>
                          {showCertificate ? 'Hide Certificate' : 'View Certificate'}
                          {certIcon}
                        </span>
                      </button>

                      {showCertificate && (
                        <div className="text-center" id="cert">
                          <img src={cert} className="img-fluid mx-auto d-block exp-img-border" alt="Internship certificate" width="600" />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
