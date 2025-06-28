// import React from "react";
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pro1 from '../assets/img/pro_1.webp';
import pro2 from '../assets/img/pro_2.webp';
import pro3 from '../assets/img/pro_3.webp';
import pro4 from '../assets/img/pro_4.webp';
// import pro5 from '../assets/img/pro_5.webp';
import pro6 from '../assets/img/pro_6.webp';
import pro7 from '../assets/img/pro_7.webp';


import { BsCalendar2CheckFill } from 'react-icons/bs';
import { PiLightningFill } from 'react-icons/pi';
import { IoIosApps } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";



function Projects() {



  return (
    <>
      <div id="Projects" className="rem-space project-size-text">
        <hr className='common-hr1' />
        <br />
      </div>
      <div className=" bg-gradient-to-tr from-red-300 to-yellow-200 d-flex justify-content-center align-items-center py-5" >
      {/* min-vh-100 */}
        <div className="container-md">
          <h2 className='text-center project-title'  >PROJECTS</h2>


          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
            {/* Card 1 */}
            <div className="col project-card-hover" >
              <div className="card h-36 shadow-lg ">
                <img
                 rel="preload"
                  src={pro1}
                  className="card-img-top rounded-xl"
                  alt="Colors"


                />
                <div className="position-relative"></div>
                <div className="card-body py-2">
                  <h1 className="card-text text-dark text-2xl font-bold cursor-pointer project-title-all" >
                    A Software System for Integrated Food Ordering and Delivery
                  </h1>
                  <div className="my-4">
                    <div className="d-flex align-items-center">
                      <BsCalendar2CheckFill size={25} color="#182C61" className="project-icon-all" />


                      <p className='project-letter-space project-size-text' >Feb 2023 - Apr 2023</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <PiLightningFill size={25} color="#182C61" className="project-icon-all" />

                      <p className='project-letter-space project-size-text' >Web application</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <IoIosApps size={35} color="#182C61" className='project-icon-skill' />

                      <p> <span className='project-skill-desc'>HTML</span>
                        <span className='project-skill-desc'>CSS</span>
                        <span className='project-skill-desc'>JS</span>
                        <span className='project-skill-desc'>PHP</span>
                        <br />
                        <br />
                        <span className='project-skill-desc'>Bootstrap</span>
                        <span className='project-skill-desc'>MySQL</span>
                        <br />
                        <br />
                      </p>
                    </div>
                    <a href="https://github.com/vicky-510/A-Software-System-for-Integrated-Food-Ordering-and-Delivery" target="_blank" rel="noopener noreferrer" >
                      <button className="mt-4 btn  btn-lg w-100 project-btn-view">View Project</button> </a>                </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col project-card-hover">
              <div className="card h-36 shadow-lg ">

                <img
                 rel="preload"
                  src={pro2}
                  className="card-img-top rounded-xl"
                  alt="Colors"


                />
                <div className="position-relative"></div>
                <div className="card-body py-2">
                  <h1 className="card-text text-dark text-2xl font-bold cursor-pointer project-title-all" >
                    Skill / Job Recommender Application
                  </h1>
                  <div className="my-4">
                    <div className="d-flex align-items-center">
                      <BsCalendar2CheckFill size={25} color="#182C61" className="project-icon-all" />


                      <p className='project-letter-space project-size-text'>Sep 2022 - Nov 2022</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <PiLightningFill size={25} color="#182C61" className="project-icon-all" />

                      <p className='project-letter-space project-size-text' >Web application</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <IoIosApps size={35} color="#182C61" className='project-icon-skill' />

                      <p> <span className='project-skill-desc'>HTML</span>
                        <span className='project-skill-desc'>CSS</span>
                        <span className='project-skill-desc'>JS</span>
                        <span className='project-skill-desc'>Bootstrap</span>
                        <br />
                        <br />
                        <span className='project-skill-desc'>Python</span>
                        <span className='project-skill-desc'>Flask</span>
                        <span className='project-skill-desc'>IBM Cloud</span>

                        <br />
                        <br />
                        <span className='project-skill-desc'>IBM DB2</span>
                        <span className='project-skill-desc'>IBM WATSON</span>



                      </p>
                    </div>
                    <a href="https://github.com/vicky-510/Skill-Job-Recommendation-system" target="_blank" rel="noopener noreferrer" >
                      <button className="mt-4 btn  btn-lg w-100 project-btn-view">View Project</button> </a>                </div>
                </div>
              </div>
            </div>


            {/* Card 3 */}
            {/* <div className="col project-card-hover">
              <div className="card h-36 shadow-lg ">

                <img
                 rel="preload"
                   src={pro5}
                  className="card-img-top rounded-xl"
                  alt="Colors"



                />
                <div className="position-relative"></div>
                <div className="card-body py-2">
                  <h1 className="card-text text-dark text-2xl font-bold cursor-pointer project-title-all" >
                    Expressive Portfolio
                  </h1>
                  <div className="my-4">
                    <div className="d-flex align-items-center">
                      <BsCalendar2CheckFill size={25} color="#182C61" className="project-icon-all" />


                      <p className='project-letter-space project-size-text' >Jun 2023</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <PiLightningFill size={25} color="#182C61" className="project-icon-all" />

                      <p className='project-letter-space project-size-text' >Web application</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <IoIosApps size={35} color="#182C61" className='project-icon-skill' />

                      <p> <span className='project-skill-desc'>HTML</span>
                        <span className='project-skill-desc'>CSS</span>
                        <span className='project-skill-desc'>JS</span>
                        <span className='project-skill-desc'>JQuery</span>
                        <br />
                        <br />
                        <span className='project-skill-desc'>Bootstrap</span>
                        <span className='project-skill-desc'>Web Speech API</span>
                        <br />
                        <br />
                      </p>

                    </div>
                    <br />
                    <a href="https://github.com/vicky-510/Expressive-Portfolio" target="_blank" rel="noopener noreferrer" >
                      <button className="mt-4 btn  btn-lg w-100 project-btn-view">View Project</button> </a>                </div>
                </div>
              </div>
            </div> */}



            {/* Card 4 */}
            <div className="col project-card-hover">
              <div className="card h-48 shadow-lg ">
                <img
                 rel="preload"
                  src={pro3}
                  className="card-img-top rounded-xl"
                  alt="Colors"


                />
                <div className="position-relative"></div>
                <div className="card-body py-2">
                  <h1 className="card-text  text-2xl font-bold cursor-pointer project-title-all" >
                    Blood Bank Management System Using Android Application
                  </h1>
                  <div className="my-4">
                    <div className="d-flex align-items-center">
                      <BsCalendar2CheckFill size={25} color="#182C61" className="project-icon-all" />


                      <p className='project-letter-space project-size-text' >Jan 2022 - Apr 2022</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <PiLightningFill size={25} color="#182C61" className="project-icon-all" />

                      <p className='project-letter-space project-size-text' > Android application</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <IoIosApps size={35} color="#182C61" style={{ marginBottom: '57px', marginRight: '0px' }} />

                      <p> <span className='project-skill-desc'>Core Java</span>
                        <span className='project-skill-desc'>XML</span>
                        <span className='project-skill-desc'>Android</span>
                        <br />
                        <br />
                        <span className='project-skill-desc'>Firebase</span>
                      </p>

                    </div>


                    <a href="https://github.com/vicky-510" target="_blank" rel="noopener noreferrer" >
                      <button className="mt-4 btn  btn-lg w-100 project-btn-view">View Project</button> </a>                </div>
                </div>
              </div>
            </div>


            {/* Card 5 */}
            <div className="col project-card-hover">
              <div className="card h-36 shadow-lg ">

                <img
                 rel="preload"
                  src={pro4}
                  className="card-img-top rounded-xl"
                  alt="Colors"

                />
                <div className="position-relative"></div>
                <div className="card-body py-2">
                  <h1 className="card-text text-dark text-2xl font-bold cursor-pointer project-title-all" >
                    JSON Fetch Master
                  </h1>
                  <div className="my-4">
                    <div className="d-flex align-items-center">
                      <BsCalendar2CheckFill size={25} color="#182C61" className="project-icon-all" />


                      <p className='project-letter-space project-size-text' >Mar 2023 - May 2023</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <PiLightningFill size={25} color="#182C61" className="project-icon-all" />

                      <p className='project-letter-space project-size-text' >Android application</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <IoIosApps size={35} color="#182C61" style={{ marginBottom: '50px', marginRight: '0px' }} />

                      <p> <span className='project-skill-desc'>Core Java</span>
                        <span className='project-skill-desc'>Android</span>
                        <span className='project-skill-desc'>JSON</span>
                        <br /><br />
                        <span className='project-skill-desc'>XML</span>
                      </p>

                    </div>
                    <br />
                    <br />
                    <a href="https://github.com/vicky-510/Json-Fetch-Master" target="_blank" rel="noopener noreferrer" >
                      <button className="mt-4 btn  btn-lg w-100 project-btn-view">View Project</button> </a>                </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col project-card-hover">
              <div className="card h-36 shadow-lg ">

                <img
                  rel="preload"
                   src={pro6}
                  className="card-img-top rounded-xl border-bottom"
                  alt="Colors"

                />
                <div className="position-relative"></div>
                <div className="card-body py-2">
                  <h1 className="card-text text-dark text-2xl font-bold cursor-pointer project-title-all" >
                    Student Management System - CRUD
                  </h1>
                  <div className="my-4">
                    <div className="d-flex align-items-center">
                      <BsCalendar2CheckFill size={25} color="#182C61" className="project-icon-all" />


                      <p className='project-letter-space project-size-text' >May 2024</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <PiLightningFill size={25} color="#182C61" className="project-icon-all" />

                      <p className='project-letter-space project-size-text' >Web application</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <IoIosApps size={35} color="#182C61" style={{ marginBottom: '50px', marginRight: '0px' }} />

                      <p> <span className='project-skill-desc'>React JS</span>
                        <span className='project-skill-desc'>Node JS</span>
                        <span className='project-skill-desc'>MySQL</span> 
                        <br /><br />
                       <span className='project-skill-desc'>Express JS</span>

                      </p>

                    </div>
                    <br />
                    <br />
                    <a href="https://github.com/vicky-510/Student-management-system-crud" target="_blank" rel="noopener noreferrer" >
                      <button className="mt-4 btn  btn-lg w-100 project-btn-view">View Project</button> </a>                </div>
                </div>
              </div>
            </div>

            {/* Card 7 */}

              <div className="col project-card-hover">
              <div className="card h-36 shadow-lg ">

                <img
                  rel="preload"
                   src={pro7}
                  className="card-img-top rounded-xl border-bottom"
                  alt="Colors"

                />
                <div className="position-relative"></div>
                <div className="card-body py-2">
                  <h1 className="card-text text-dark text-2xl font-bold cursor-pointer project-title-all" >
                    Domain Insight
                  </h1>
                  <div className="my-4">
                    <div className="d-flex align-items-center">
                      <BsCalendar2CheckFill size={25} color="#182C61" className="project-icon-all" />


                      <p className='project-letter-space project-size-text' >May 2025 - June 2025</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <PiLightningFill size={25} color="#182C61" className="project-icon-all" />

                      <p className='project-letter-space project-size-text' >Web application</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <IoIosApps size={35} color="#182C61" style={{ marginBottom: '50px', marginRight: '0px' }} />

                      <p> <span className='project-skill-desc'>Angular</span>
                        <span className='project-skill-desc'>Node JS</span>
                        <span className='project-skill-desc'>Typescript</span>
                        <br /><br />
                        <span className='project-skill-desc'>WHOIS XML API</span> 
                        <span className='project-skill-desc'>DNS Lookup API</span> 


                      </p>

                    </div>
                    <br />
                    <br />
                    <a href="https://github.com/vicky-510/vDomain-insight-frontend" target="_blank" rel="noopener noreferrer" >
                      <button className="mt-4 btn  btn-lg w-100 project-btn-view">View Project</button> </a>                </div>
                </div>
              </div>
            </div>


          </div>
          <h2 className='text-center mt-5 project-text-more' ><Link to='https://github.com/vicky-510/' target="_blank" rel="noopener noreferrer" class="text-decoration-none project-text-more"><FaArrowRight size={20} /> View more</Link></h2>

        </div>
      </div>
    </>
  );
}

export default Projects;











