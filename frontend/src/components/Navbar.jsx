import {useState} from 'react';
import { HashLink } from "react-router-hash-link";
import logo from '../assets/img/logo_waran.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillHouseFill, BsFillInfoSquareFill } from "react-icons/bs";
import { FaThList,FaSignInAlt } from "react-icons/fa";
import { MdWork} from "react-icons/md";
import { SiPaloaltosoftware } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";
import { RiSettings4Fill} from "react-icons/ri";
import { SiBattledotnet } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar navbars-common-first" >
        <div className="container">
          <HashLink to="/" className="navbar-brand d-flex align-items-center justify-content-center justify-content-lg-start" >
            <img src={logo} className="img-fluid navbars-img-css"  alt="website logo" />
          </HashLink>
          <button className="navbar-toggler navbars-btn-1" type="button" onClick={toggleNavbar} >
          {isOpen ? <FaTimes className='navbars-icon-common-toggle'/> : <FaBars className='navbars-icon-common-toggle'/>}
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav" >
            <ul className="navbar-nav ms-auto align-items-center justify-content-center justify-content-lg-start" >
           
              <li className="nav-item">
              <BsFillHouseFill size={27} color='#03A9F4' className='icon navbars-icon-css1' id='icon' />
                <HashLink to="/#Home" className="nav-link link-font-size" id="nav" smooth>
                  Home</HashLink>
              </li>

              <li className="nav-item">
              <FaThList size={22} color='#03A9F4'  className='icon navbars-icon-css2' id='icon'/>
                <HashLink to="/#Projects" className="nav-link link-font-size" smooth>
                 Projects</HashLink>
              </li>

              <li className="nav-item">
              <MdWork size={26} color='#03A9F4' className='icon navbars-icon-css3' id='icon'/>
                <HashLink to="/#Experience" className="nav-link link-font-size" smooth>
                Experience</HashLink>
              </li>

              <li className="nav-item">
              <RiSettings4Fill size={26} color='#03A9F4'  className='icon navbars-icon-css4' id='icon'/>
                <HashLink to="/#Service" className="nav-link link-font-size" smooth>
                Service</HashLink>
              </li>

              <li className="nav-item">
              <SiPaloaltosoftware size={22} color='#03A9F4'  className='icon navbars-icon-css5'   id='icon'/>
                <HashLink to="/#Skills" className="nav-link link-font-size" smooth>
                Skills</HashLink>
              </li>

              <li className="nav-item">
              <BsFillInfoSquareFill size={20} color='#03A9F4'  className='icon navbars-icon-css6' id='icon'/>
                <HashLink to="/#About" className="nav-link link-font-size" smooth>
               About</HashLink>
              </li>

              <li className="nav-item">
              <BiSolidContact size={26} color='#03A9F4'  className='icon navbars-icon-css7'   id='icon'/>
                <HashLink to="/Contact" className="nav-link link-font-size" smooth>
                Contact</HashLink>
              </li>

              <li className="nav-item">
              <SiBattledotnet size={26} color='#03A9F4'  className='icon navbars-icon-css8'   id='icon'/>
                <HashLink to="/VoicePort" className="nav-link link-font-size" smooth>
                Voice Port</HashLink>
              </li>


              {/* <li className="nav-item nav-common-btn-css">
                <HashLink to="/login" className="link-font-size navbars-icon-css9">Login<FaSignInAlt size={22}  className='navbars-icon-css10' />
                </HashLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
