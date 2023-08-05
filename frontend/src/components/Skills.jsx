// import React from "react";
import { Container, Col, Card } from 'react-bootstrap';
import html5 from '../assets/img/html5.png';
import css3 from '../assets/img/css-3.png';
import js from '../assets/img/JS.png';
import bootstrap from '../assets/img/Bootstrap-frame.png';
import react from '../assets/img/react-1.png';
import mysql from '../assets/img/mysql-4.png';
import node from '../assets/img/node-1.png';
import express from '../assets/img/express-1.png';
import jquery from '../assets/img/jquery-3.png';
import java from '../assets/img/java-2.png';
import php from '../assets/img/php2.png';
import mongodb from '../assets/img/mongo-db.png';
import '../assets/styles/Main.css';


const Skills = () => {


  return (
    <>
    <div id="Skills" className="rem-space">
    </div>
    <hr/>
    <section style={{ backgroundColor: 'white', borderRadius: 'none' }} >
      <Container style={{ backgroundColor: 'white', borderRadius: 'none' }}>
        <div className="card" style={{ backgroundColor: 'white', padding: '4% 0%', border: 'none' }}>
          <div className="card-body">
            <h2 className="text-center weight" style={{ fontSize: '28px', color: '#182C61', letterSpacing:'1px',textTransform:'none', fontWeight:'800' }}>
              SKILLS
            </h2>
            <br />
            <br />
            <div className="row justify-content-center">
              <Col md="3" >
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}>
                    <img src={html5}  className="card-img-top" alt="Skill 1" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    HTML
                  </h6>
                </Card>
              </Col>
              <Col md="3">
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}> 
                   <img src={css3} className="card-img-top" alt="Skill 2" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    CSS
                  </h6>
                </Card>
              </Col>
              <Col md="3">
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}> 
                  <img src={js} className="card-img-top" alt="Skill 3" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    JavaScript
                  </h6>
                </Card>
              </Col>
              <Col md="3">
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}>
                     <img src={bootstrap} className="card-img-top" alt="Skill 4" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    Bootstrap
                  </h6>
                </Card>
              </Col>

              <Col md="3">
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}>
                  <img src={react} className="card-img-top" alt="Skill 2" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    React
                  </h6>
                </Card>
              </Col>


                <Col md="3">
                <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}> 
                  <img src={node} className="card-img-top" alt="Skill 4" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    Node Js
                  </h6>
                </Card>
              </Col>

              <Col md="3">
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}>
                     <img src={express} className="card-img-top" alt="Skill 4" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    Express Js
                  </h6>
                </Card>
              </Col>

              <Col md="3" >
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}>
                     <img src={mongodb} className="card-img-top" alt="Skill 4" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    Mongo DB
                  </h6>
                </Card>
              </Col>

            

              <Col md="3">
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}> <img src={java} className="card-img-top" alt="Skill 4" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    Java
                  </h6>
                </Card>
              </Col>

              <Col md="3">
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}>   <img src={php} className="card-img-top" alt="Skill 4" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    Php
                  </h6>
                </Card>
              </Col>

              <Col md="3">
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}><img src={jquery} className="card-img-top" alt="Skill 4" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
                    JQuery
                  </h6>
                </Card>
              </Col>
             

              <Col md="3">
              <Card className="mb-3" style={{ fontSize: 'x-large', color: 'white', backgroundColor: '#182C61'  }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#182C61' }}>
                     <img src={mysql} className="card-img-top" alt="Skill 4" style={{ padding: '10px', width: '120px', height: '120px' }} />
                  </div>
                  <h6 className="card-title text-center weight" style={{ fontSize: 'large', color: 'white', letterSpacing:'1px',textTransform:'none' }}>
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
