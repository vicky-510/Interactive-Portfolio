// import React from "react";
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import supraiq from '../assets/img/project/supraiq.webp';
import lexiclear from '../assets/img/project/lexiclear.webp';
import pro1 from '../assets/img/project/pro_1.webp';
import pro2 from '../assets/img/project/pro_2.webp';
import pro4 from '../assets/img/project/pro_4.webp';
import pro7 from '../assets/img/project/pro_7.webp';

import { BsCalendar2CheckFill } from 'react-icons/bs';
import { PiLightningFill } from 'react-icons/pi';
import { IoIosApps } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    img: supraiq,
    title: 'SupraIQ',
    period: 'Sep 2026',
    type: 'Web application',
    skills: ['React JS', 'Node JS', 'MongoDB'],
    repo: 'https://supraiq.vwaran.com/',
  },
  {
    img: lexiclear,
    title: 'Lexi Clear AI',
    period: 'Sep 2026',
    type: 'Web application',
    skills: ['React JS', 'Node JS', 'MongoDB', 'Gemini'],
    repo: 'https://lexiclearai.netlify.app/',
  },
  {
    img: pro7,
    title: 'Domain Insight',
    period: 'May 2025 - June 2025',
    type: 'Web application',
    skills: ['Angular', 'Node JS', 'Typescript', 'WHOIS XML API', 'DNS Lookup API'],
    repo: 'https://github.com/vicky-510/vDomain-insight-frontend',
  },
  {
    img: pro1,
    title: 'A Software System for Integrated Food Ordering and Delivery',
    period: 'Feb 2023 - Apr 2023',
    type: 'Web application',
    skills: ['HTML', 'CSS', 'JS', 'PHP', 'Bootstrap', 'MySQL'],
    repo: 'https://github.com/vicky-510/A-Software-System-for-Integrated-Food-Ordering-and-Delivery',
  },
  {
    img: pro2,
    title: 'Skill / Job Recommender Application',
    period: 'Sep 2022 - Nov 2022',
    type: 'Web application',
    skills: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Python', 'Flask', 'IBM Cloud', 'IBM DB2', 'IBM WATSON'],
    repo: 'https://github.com/vicky-510/Skill-Job-Recommendation-system',
  },
  {
    img: pro4,
    title: 'JSON Fetch Master',
    period: 'Mar 2023 - May 2023',
    type: 'Android application',
    skills: ['Core Java', 'Android', 'JSON', 'XML'],
    repo: 'https://github.com/vicky-510/Json-Fetch-Master',
  },
];

function Projects() {
  return (
    <>
      <div id="Projects" className="rem-space project-size-text"></div>
      <div className="project-section-v2">
        <div className="container-md">
          <h2 className='text-center project-title'>PROJECTS</h2>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((project, i) => (
              <div className="col" key={project.title}>
                <div className={`project-card-v2 project-delay-${i % 5}`}>
                  <img src={project.img} className="project-card-img" alt={project.title} loading="lazy" />

                  <div className="project-card-body">
                    <h3 className="project-title-all">{project.title}</h3>

                    <div className="project-meta-row">
                      <BsCalendar2CheckFill size={16} className="project-icon-all" />
                      <span className='project-letter-space project-size-text'>{project.period}</span>
                    </div>
                    <div className="project-meta-row">
                      <PiLightningFill size={16} className="project-icon-all" />
                      <span className='project-letter-space project-size-text'>{project.type}</span>
                    </div>

                    <div className="project-skills-row">
                      <IoIosApps size={22} className="project-icon-skill" />
                      <div className="project-skills-wrap">
                        {project.skills.map((skill) => (
                          <span className='project-skill-desc' key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>

                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-btn-link">
                      <button className="btn btn-lg w-100 project-btn-view">View Project</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className='text-center mt-5 project-text-more'>
            <Link to='https://github.com/vicky-510/' target="_blank" rel="noopener noreferrer" className="text-decoration-none project-text-more">
              <FaArrowRight size={20} /> View more
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Projects;
