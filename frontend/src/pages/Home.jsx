import Service from '../components/Service'
import Experience from '../components/Experience'
import Achievement from '../components/Achievement'
// import Tours from '../components/Tours'
// import Demo from '../components/Demo'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Reveal from '../components/motion/Reveal'
import { HashLink } from "react-router-hash-link";





 function Home (){
  return (
    <>
    <Navbar />
    {/* <Starter /> */}
    <About />
    {/* <WebSpeech /> */}
    <Projects />



    {/* <Demo /> */}
    <Experience />

    <Achievement />

    {/* <Tours /> */}

    <Reveal><Skills /></Reveal>

    <Service />

    <Reveal><Contact /></Reveal>

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