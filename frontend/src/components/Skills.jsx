// import React from "react";
import { Container, Col, Card } from 'react-bootstrap';
import html5 from '../assets/img/html5.webp';
import css3 from '../assets/img/css-3.webp';
import js from '../assets/img/JS.webp';
import bootstrap from '../assets/img/Bootstrap-frame.webp';
import react from '../assets/img/react-1.webp';
import mysql from '../assets/img/mysql-4.webp';
import node from '../assets/img/node-1.webp';
import express from '../assets/img/express-1.webp';
import jquery from '../assets/img/jquery-3.webp';
import java from '../assets/img/java-2.webp';
import php from '../assets/img/php2.webp';
import mongodb from '../assets/img/mongo-db.webp';
import '../assets/styles/Main.css';


const Skills = () => {


  return (
    <>
    <div id="Skills" className="rem-space">
    </div>
    <br/>
    <hr className='common-hr1'/>
    <section className='skill-bg-color' >
      <Container className='skill-bg-color'>
        <div className="card skill-card" >
          <div className="card-body">
            <h2 className="text-center weight skill-title" >
              SKILLS
            </h2>
            <br /><br />
            <div className="row justify-content-center">
              <Col md="3" >
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div">
                    <img  rel="preload" as="image"  src={html5}  className="card-img-top skill-img-all" alt="Skill 1"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    HTML
                  </h6>
                </Card>
              </Col>
              <Col md="3">
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div"> 
                   <img  rel="preload" as="image" src={css3} className="card-img-top skill-img-all" alt="Skill 2"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    CSS
                  </h6>
                </Card>
              </Col>
              <Col md="3">
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div"> 
                  <img  rel="preload" as="image" src={js} className="card-img-top skill-img-all" alt="Skill 3"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    JavaScript
                  </h6>
                </Card>
              </Col>
              <Col md="3">
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div">
                     <img  rel="preload" as="image" src={bootstrap} className="card-img-top skill-img-all" alt="Skill 4"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    Bootstrap
                  </h6>
                </Card>
              </Col>

              <Col md="3">
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div">
                  <img  rel="preload" as="image" src={react} className="card-img-top skill-img-all" alt="Skill 2"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    React
                  </h6>
                </Card>
              </Col>


                <Col md="3">
                <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div"> 
                  <img  rel="preload" as="image" src={node} className="card-img-top skill-img-all" alt="Skill 4"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    Node Js
                  </h6>
                </Card>
              </Col>

              <Col md="3">
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div">
                     <img  rel="preload" as="image" src={express} className="card-img-top skill-img-all" alt="Skill 4"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    Express Js
                  </h6>
                </Card>
              </Col>

              <Col md="3" >
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div">
                     <img  rel="preload" as="image" src={mongodb} className="card-img-top skill-img-all" alt="Skill 4"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    Mongo DB
                  </h6>
                </Card>
              </Col>

            

              <Col md="3">
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div"> <img  rel="preload" as="image" src={java} className="card-img-top skill-img-all" alt="Skill 4"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    Java
                  </h6>
                </Card>
              </Col>

              <Col md="3">
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div">   <img  rel="preload" as="image" src={php} className="card-img-top skill-img-all" alt="Skill 4"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    Php
                  </h6>
                </Card>
              </Col>

              <Col md="3">
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div"><img  rel="preload" as="image" src={jquery} className="card-img-top skill-img-all" alt="Skill 4"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    JQuery
                  </h6>
                </Card>
              </Col>
             

              <Col md="3">
              <Card className="mb-3 skill-inner-card" >
                  <div className="d-flex align-items-center justify-content-center skill-common-div">
                     <img  rel="preload" as="image" src={mysql} className="card-img-top skill-img-all" alt="Skill 4"  />
                  </div>
                  <h6 className="card-title text-center weight skill-title-h6" >
                    MySQL
                  </h6>
                </Card>
              </Col>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}

export default Skills;
