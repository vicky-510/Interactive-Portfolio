// import React from "react";
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import html5 from '../assets/img/skills/html5.webp';
import css3 from '../assets/img/skills/css-3.webp';
import js from '../assets/img/skills/JS.webp';
import bootstrap from '../assets/img/skills/Bootstrap-frame.webp';
import react from '../assets/img/skills/react-1.webp';
import mysql from '../assets/img/skills/mysql-4.webp';
import node from '../assets/img/skills/node-1.webp';
import express from '../assets/img/skills/express-1.webp';
import angular from '../assets/img/skills/angular.webp';
import typescript from '../assets/img/skills/typescript.webp';
import mongodb from '../assets/img/skills/mongo-db.webp';
import '../assets/styles/Main.css';

const frontendSkills = [
  { src: html5, label: 'HTML' },
  { src: css3, label: 'CSS' },
  { src: js, label: 'JavaScript' },
  { src: typescript, label: 'Typescript' },
  { src: bootstrap, label: 'Bootstrap' },
  { src: react, label: 'React' },
  { src: angular, label: 'Angular' },
];

const backendSkills = [
  { src: node, label: 'Node Js' },
  { src: express, label: 'Express Js' },
  { src: mongodb, label: 'Mongo DB' },
  { src: mysql, label: 'MySQL' },
];

const SkillCard = ({ src, label }) => (
  <div className="skill-marquee-card">
    <img src={src} className="skill-img-all" alt={label} />
    <span className="skill-title-h6">{label}</span>
  </div>
);

SkillCard.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const SkillRow = ({ skills, direction }) => (
  <div className="skill-marquee-row">
    <div className={`skill-marquee-track skill-marquee-${direction}`}>
      {[...skills, ...skills].map((skill, i) => (
        <SkillCard key={`${skill.label}-${i}`} src={skill.src} label={skill.label} />
      ))}
    </div>
  </div>
);

SkillRow.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

const Skills = () => {
  return (
    <>
      <div id="Skills" className="rem-space">
      </div>
      <section className='skill-bg-color'>
        <Container className="skill-card">
          <h2 className="text-center weight skill-title">
            SKILLS
          </h2>
          <SkillRow skills={frontendSkills} direction="left" />
          <SkillRow skills={backendSkills} direction="right" />
        </Container>
      </section>
    </>
  );
};

export default Skills;
