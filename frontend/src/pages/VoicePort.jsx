// import React from 'react'
import { useEffect } from 'react';
import { HashLink } from "react-router-hash-link";
import WebSpeech from '../components/WebSpeech'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'




 function VoicePort (){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
  <div style={{marginTop:'80px',backgroundColor:'#182C61'}}>
    <br/>
    <br/>
    <br/>
  <WebSpeech />
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  </div>

  <Footer />
  <HashLink smooth to="/VoicePort" />

  {/* 
      <HashLink smooth to="/VoicePort#Projects" />
      <HashLink smooth to="/VoicePort#Experience" />
      <HashLink smooth to="/VoicePort#Skills" />
      <HashLink smooth to="/VoicePort#Service" />
      <HashLink smooth to="/VoicePort#About" />
      <HashLink smooth to="/VoicePort#Contact" /> */}
    </>
  )
}
export default VoicePort;