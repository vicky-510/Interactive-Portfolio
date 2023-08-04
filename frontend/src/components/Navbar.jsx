// import React from 'react';
import { HashLink } from "react-router-hash-link";
import logo from '../assets/img/logo_white.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillHouseFill, BsFillInfoSquareFill } from "react-icons/bs";
import { FaThList,FaSignInAlt } from "react-icons/fa";
import { MdWork} from "react-icons/md";
import { SiPaloaltosoftware } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";
import { RiSettings4Fill} from "react-icons/ri";
import { SiBattledotnet } from "react-icons/si";




const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar" style={{ color: '#182C61', paddingTop: '5px', paddingBottom: '5px' }}>
        <div className="container">
          <HashLink to="/" className="navbar-brand d-flex align-items-center justify-content-center justify-content-lg-start" >
            <img src={logo} className="img-fluid" style={{ maxHeight: '60px', mixBlendMode: 'multiply', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} alt="" />
          </HashLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ padding: '15px'}}>
            <span className="navbar-toggler-icon" style={{ backgroundColor: '#182C61',borderRadius:'5px' }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center justify-content-center justify-content-lg-start">

              <li className="nav-item">
              <BsFillHouseFill size={27} color='#45aaf2' style={{ marginLeft: '18px', marginBottom: '0px',marginTop: '1px' }} className='icon' id='icon' />
                <HashLink to="/#Home" className="nav-link" id="nav" smooth>
                  Home</HashLink>
              </li>

              <li className="nav-item">
              <FaThList size={22} color='#45aaf2' style={{ marginLeft: '26px', marginBottom: '0px',marginTop: '1px' }} className='icon' id='icon'/>
                <HashLink to="/#Projects" className="nav-link" smooth>
                 Projects</HashLink>
              </li>

              <li className="nav-item">
              <MdWork size={26} color='#45aaf2' style={{ marginLeft: '34px', marginBottom: '0px',marginTop: '1px' }} className='icon' id='icon'/>
                <HashLink to="/#Experience" className="nav-link" smooth>
                Experience</HashLink>
              </li>

              <li className="nav-item">
              <RiSettings4Fill size={27} color='#45aaf2' style={{ marginLeft: '22px', marginBottom: '0px',marginTop: '1px' }} className='icon' id='icon'/>
                <HashLink to="/#Service" className="nav-link" smooth>
                Service</HashLink>
              </li>

              <li className="nav-item">
              <SiPaloaltosoftware size={23} color='#45aaf2' style={{ marginLeft: '16px', marginBottom: '0px',marginTop: '1px' }} className='icon' id='icon'/>
                <HashLink to="/#Skills" className="nav-link" smooth>
                Skills</HashLink>
              </li>

              <li className="nav-item">
              <BsFillInfoSquareFill size={22} color='#45aaf2' style={{ marginLeft: '22px', marginBottom: '0px',marginTop: '1px' }} className='icon' id='icon'/>
                <HashLink to="/#About" className="nav-link" smooth>
               About</HashLink>
              </li>

              <li className="nav-item">
              <BiSolidContact size={26} color='#45aaf2' style={{ marginLeft: '24px', marginBottom: '0px',marginTop: '1px' }} className='icon' id='icon'/>
                <HashLink to="/Contact" className="nav-link" smooth>
                Contact</HashLink>
              </li>

              <li className="nav-item">
              <SiBattledotnet size={26} color='#45aaf2' style={{ marginLeft: '25px', marginBottom: '0px',marginTop: '1px' }} className='icon' id='icon'/>
                <HashLink to="/VoicePort" className="nav-link" smooth>
                Voice Port</HashLink>
              </li>


              <li className="nav-item">
                <HashLink to="/login" className="nav-link" style={{ backgroundColor: '#45aaf2', fontWeight: 500, color: 'white', padding: '8px 16px', borderRadius: '5px', letterSpacing: '1px' }}>Login<FaSignInAlt size={22} color='#ecf0f1' style={{ marginLeft: '5px', marginBottom: '4px' }} />
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
