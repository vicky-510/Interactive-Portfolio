// import React from "react";
import '../assets/styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pro1 from '../assets/img/pro_1.png';
import pro2 from '../assets/img/pro_2.png';
import pro3 from '../assets/img/pro_3.png';
import { BsCalendar2CheckFill } from 'react-icons/bs';
import { PiLightningFill } from 'react-icons/pi';
import { IoIosApps } from 'react-icons/io';






function Projects() {



  return (
    <> 
    <div id="Projects" className="rem-space">
      <hr/>
       <br /> 
   </div>
    <div className="min-vh-100 bg-gradient-to-tr from-red-300 to-yellow-200 d-flex justify-content-center align-items-center py-5" >

      <div className="container-md">
      <h2 className='text-center' style={{fontWeight:'bolder', fontSize: '28px', color:'#182C61', letterSpacing:'1px'  }} >PROJECTS</h2>
       <br/>
       <br/>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Card 1 */}
          <div className="col" >
            <div className="card h-36 shadow-lg "> 
              <img
                src={pro1}
                className="card-img-top rounded-xl"
                alt="Colors"
              />
              <div className="position-relative"></div>
              <div className="card-body py-2"> 
                <h1 className="card-text text-dark text-2xl font-bold cursor-pointer" style={{ fontSize: '20px',color:'#182C61',letterSpacing:'1px' }} >
                  A Software System for Integrated Food Ordering and Delivery
                </h1>
                <div className="my-4">
                <div className="d-flex align-items-center">
                <BsCalendar2CheckFill size={25} color="#182C61" style={{ marginBottom:'17px', marginRight:'10px'}}/>


                    <p style={{letterSpacing:'1px'}}>Feb 2023 - Apr 2023</p> 
                  </div>
                  <div className="d-flex align-items-center">
                  <PiLightningFill size={25} color="#182C61" style={{ marginBottom:'17px', marginRight:'10px'}}/>

                    <p style={{letterSpacing:'1px'}}>Web application</p>
                  </div>
                  <div className="d-flex align-items-center">
                  <IoIosApps size={35} color="#182C61" style={{ marginBottom:'77px', marginRight:'10px'}}/>

                    <p> <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>HTML</span> 
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>CSS</span>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>Javascript</span>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>Bootstrap</span>
                    <br/>
                    <br/>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>PHP</span>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>MySQL</span>
                    <br/>
                    <br/>
                     </p>
                  </div>
                  <a href="https://github.com/vicky-510/A-Software-System-for-Integrated-Food-Ordering-and-Delivery" target="_blank" rel="noopener noreferrer" >
                    <button className="mt-4 btn  btn-lg w-100" style={{backgroundColor:'#182C61',color:'white'}}>View Project</button> </a>                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card h-36 shadow-lg "> 
            
              <img
                src={pro2}
                className="card-img-top rounded-xl"
                alt="Colors"
              />
              <div className="position-relative"></div>
              <div className="card-body py-2"> 
                <h1 className="card-text text-dark text-2xl font-bold cursor-pointer" style={{ fontSize: '20px',color:'#182C61',letterSpacing:'1px' }} >
                Skill / Job Recommender Application
                </h1>
                <div className="my-4">
                <div className="d-flex align-items-center">
                <BsCalendar2CheckFill size={25} color="#182C61" style={{ marginBottom:'17px', marginRight:'10px'}}/>


                    <p style={{letterSpacing:'1px'}}>Sep 2022 - Nov 2022</p>
                  </div>
                  <div className="d-flex align-items-center">
                  <PiLightningFill size={25} color="#182C61" style={{ marginBottom:'17px', marginRight:'10px'}}/>

                    <p style={{letterSpacing:'1px'}}>Web application</p>
                  </div>
                  <div className="d-flex align-items-center">
                  <IoIosApps size={35} color="#182C61" style={{ marginBottom:'97px', marginRight:'10px'}}/>

                  <p> <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>HTML</span> 
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>CSS</span>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>Javascript</span>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>Bootstrap</span>
                    <br/>
                    <br/>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>Python</span>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>IBM Cloud</span>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>IBM DB2</span>
                    <br/>
                    <br/>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>Flask</span>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>IBM WATSON</span>



                     </p>
                  </div>
                  <a href="https://github.com/IBM-EPBL/IBM-Project-27159-1660048023" target="_blank" rel="noopener noreferrer" >
                    <button className="mt-4 btn  btn-lg w-100" style={{backgroundColor:'#182C61',color:'white'}}>View Project</button> </a>                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card h-48 shadow-lg "> 
              <img
                src={pro3}
                className="card-img-top rounded-xl"
                alt="Colors"
              />
              <div className="position-relative"></div>
              <div className="card-body py-2"> 
                <h1 className="card-text  text-2xl font-bold cursor-pointer" style={{ fontSize: '20px', color:'#182C61',letterSpacing:'1px' }} >
                 Blood Bank Management System Using Android Application
                </h1>
                <div className="my-4">
                <div className="d-flex align-items-center">
                <BsCalendar2CheckFill size={25} color="#182C61" style={{ marginBottom:'17px', marginRight:'10px'}}/>

                
                    <p style={{letterSpacing:'1px'}}>Jan 2022 - Apr 2022</p>
                  </div>
                  <div className="d-flex align-items-center">
                  <PiLightningFill size={25} color="#182C61" style={{ marginBottom:'17px', marginRight:'10px'}}/>

                    <p style={{letterSpacing:'1px'}}> Android application</p>
                  </div>
                  <div className="d-flex align-items-center">
                  <IoIosApps size={35} color="#182C61" style={{ marginBottom:'17px', marginRight:'10px'}}/>

                  <p> <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>Core Java</span> 
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>XML</span>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>Android</span>
                    <br/>
                    <br/>
                    <span style={{ border:'1px solid gray',padding:'4px 6px', borderRadius:'20px', marginRight:'3px',marginLeft:'5px', color:'#182C61', fontWeight:'500',letterSpacing:'1px'}}>Firebase</span>
                     </p>
                   
                  </div>
                  <br/>
                    <br/>
                    
                    <a href="https://github.com/vicky-510"  target="_blank" rel="noopener noreferrer" >
                      <button className="mt-4 btn  btn-lg w-100" style={{backgroundColor:'#182C61',color:'white'}}>View Project</button> </a>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;










