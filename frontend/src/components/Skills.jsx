// import React from "react";
import PropTypes from 'prop-types';
import html5 from '../assets/img/html5.webp';
import css3 from '../assets/img/css-3.webp';
import js from '../assets/img/JS.webp';
import bootstrap from '../assets/img/Bootstrap-frame.webp';
import react from '../assets/img/react-1.webp';
import mysql from '../assets/img/mysql-4.webp';
import node from '../assets/img/node-1.webp';
import express from '../assets/img/express-1.webp';
import angular from '../assets/img/angular.webp';
import typescript from '../assets/img/typescript.webp';
import mongodb from '../assets/img/mongo-db.webp';
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
        <div className="skill-card">
          <h2 className="text-center weight skill-title">
            SKILLS
          </h2>
          <SkillRow skills={frontendSkills} direction="left" />
          <SkillRow skills={backendSkills} direction="right" />
        </div>
      </section>
    </>
  );
};

export default Skills;
