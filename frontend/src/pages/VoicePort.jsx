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
  <div className='voice-margin-space'>
   <div className='voice-margin-space1'>
  <WebSpeech />
  </div>
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