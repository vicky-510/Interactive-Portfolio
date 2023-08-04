import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Starter from '../components/Starter'
// import WebSpeech from './Components/WebSpeech'
import Service from '../components/Service'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
// import Contacts from '../components/Contacts'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { HashLink } from "react-router-hash-link";



 function Home (){
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <Navbar />

    <Starter />
    {/* <WebSpeech /> */}
    <Projects />


  
 
    <Experience />
    
  
    <Service />
   

    <Skills />
   

    <About />

    <Footer />

     <HashLink smooth to="/#Home" />
     <HashLink smooth to="/#Projects" />
      <HashLink smooth to="/#Experience" />
      <HashLink smooth to="/#Skills" />
      <HashLink smooth to="/#Service" />
      <HashLink smooth to="/#About" />
      <HashLink smooth to="/#Contact" />
      <HashLink smooth to="/VoicePort" />

  
      </>
        )
}
export default Home;