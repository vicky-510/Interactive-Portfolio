import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Form, Button, Badge } from 'react-bootstrap';
import '../assets/styles/WebSpeech.css'
import { BiVolumeMute } from "react-icons/bi";
// import { RiVoiceprintLine } from "react-icons/ri";
import { VscUnmute } from "react-icons/vsc";
import { GiSoundWaves } from "react-icons/gi";
// import { MdKeyboardVoice } from "react-icons/md";


const WebSpeech = () => {

  useEffect(() => {


    AOS.init({

    });
    AOS.refresh();
  }, []);

  const [rateValue, setRateValue] = useState(1);
  const [pitchValue, setPitchValue] = useState(1);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const input_From_Me =
    "HI I am Vigneshwaran, a passionate and dedicated Computer Science Engineering student completed my Bachelor's degree at KLN College of Information Technology. With an impressive CGPA of 8.37, I have consistently excelled in my academic journey.\n\nEducation:\nBachelor of Engineering in Computer Science and Engineering - KLN College of Information Technology (2019 - 2023)\n  CGPA: 8.37\nClass 12 - Phoenix Matric Higher Secondary School (Jun 2018 - May 2019)\n  Percentage: 76.16%\nClass 10 - Phoenix Matric Higher Secondary School (Jun 2016 - May 2017)\n  Percentage: 92.4%\n\nExperience:\nAs an Android App Development Intern  at NilaApps Private Limited (March 2023 - May 2023), I designed and developed an Android app  that gathers and processes data from a JSON file. Conducted research on user experience and made recommendations for improvements.\nDebugged and troubleshot issues in the Android app.\nSkills used:  Core Java, XML, JSON.\n\nProjects:\n\nProject 1: Interactive Portfolio: Leveraging Web Speech API Integration for Expressive Content Narration (June 2023 - July 2023)\n Revolutionize your experience with my innovative project. By seamlessly integrating the Web Speech API, I offer interactive content narration that captivates and engages.\n Explore my portfolio through immersive spoken narratives, showcasing my projects, skills, and experiences in a compelling manner.\n\n Project 2: A Software System for Food Ordering and Delivery (Feb 2023 - Apr 2023)\n    Seamlessly order food from restaurants and home cooks with personalized experiences.\n    Utilizes recommendations and valuable resources to enhance cooking skills and streamline the food industry.\n\n   Project 3: Skill/Job Recommender Application (Sep 2022 - Nov 2022)\n   Connects job seekers with relevant employment opportunities based on their skillset.\n    Optimizes the job search process for a more efficient experience.\n\n   Project 4: Blood Bank Management System using Android Application (Jan 2022 - Apr 2022)\n   Facilitates quick access to blood in emergencies by connecting users with nearby donors.\n   Make a difference by effortlessly saving lives.\n\nTechnical Skills:\nLanguages: React js, Express, Node js, Mongo DB, Java, C, SQL, MySQL\nDeveloper Tools: VS Code, Eclipse, Android Studio\nWeb Development: HTML, CSS, JavaScript, JQuery\n\nCertifications:\n- Java Certification from Dataflair\n- MySQL Database Development Certification from Infosys Springboard\n\nAchievements:\n- Ranked in the top 6.48% on HackerRank in Java, demonstrating exceptional programming skills and a commitment to growth.\n- Runner-up position in a team chess game during the 2020 college sports meet, showcasing teamwork and strategic thinking.\n- Victorious in the zonal-level handball competition in 2015, demonstrating exceptional sportsmanship and dedication.\n- Active participant in the district-level drawing competition organized by Madura College Higher Secondary School.\n\nThank you for exploring my Voice Port!. Have a fantastic day!";
  const [textInputValue, setTextInputValue] = useState(input_From_Me);

  const getVoices = () => {
    const synth = window.speechSynthesis;
    const voicesArray = synth.getVoices();
    setVoices(voicesArray);
  };

  useEffect(() => {
    getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = getVoices;
    }
  }, [selectedVoice]);

  const speak = () => {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      console.error('Already speaking...');
      return;
    }
    if (textInputValue !== '') {
      const speakText = new SpeechSynthesisUtterance(textInputValue);
      speakText.onend = () => {
        console.log('Done speaking...');
      };
      speakText.onerror = () => {
        console.error(' Speaking Stopped');
      };
      voices.forEach((voice) => {
        if (voice.name === selectedVoice) {
          speakText.voice = voice;
        }
      });
      speakText.rate = rateValue;
      speakText.pitch = pitchValue;
      synth.speak(speakText);
    }
  };

  const stopSpeaking = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
  };

  return (
    <section className='webspeech-section-css'>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Form className="mb-5">
              <Form.Group>
                <h4
                  className="text-center webspeech-title-css"
                  
                  data-aos='zoom-in' data-aos-duration='1000' data-aos-easing="ease-in-out" data-aos-offset="300">

                  <GiSoundWaves size={52} color='#45aaf2'  className='icon webspeech-icon1' data-aos='slide-right' data-aos-duration='3000' data-delay="800" />
                  VOICE PORT
                  <GiSoundWaves size={50} color='#45aaf2'  className='icon webspeech-icon2' data-aos='slide-left' data-aos-duration='3000' data-delay="800" />

                </h4>
                <br /><br />
                {/* Use inline styles to hide the textarea */}
                <Form.Control
                  as="textarea"
                  id="text-input"
                  className="form-control form-control-lg"
                  style={{ display: 'none' }}
                  rows={10}
                  value={textInputValue}
                  onChange={(e) => setTextInputValue(e.target.value)}
                />
                {/* Display the input as a plain text */}
                <p style={{ display: 'none' }}>{textInputValue}</p>
              </Form.Group>
              <Form.Group className="text-white text-left">
                <Form.Label
                  data-aos='zoom-in' data-aos-duration='3000' data-aos-delay="300" className='webspeech-css-common-label'
                >
                  Rate
                </Form.Label>
                <Badge id="rate-value" className="badge-primary float-right">
                  {rateValue}
                </Badge>
                <Form.Control
                  type="range"
                  id="rate"
                  className="custom-range "
                  min="0.5"
                  max="2"
                  value={rateValue}
                  step="0.1"
                  onChange={(e) => setRateValue(e.target.value)}
                  style={{ float: 'right' }}
                  data-aos='zoom-in' data-aos-duration='3000' data-aos-delay="300"
                />
                <br /><br />
              </Form.Group>
              <Form.Group className="text-white text-left">
                <Form.Label
                  data-aos='zoom-in' data-aos-duration='3000' data-aos-delay="300" className='webspeech-css-common-label'
                >
                  Pitch
                </Form.Label>
                <Badge id="pitch-value" className="badge-primary float-right">
                  {pitchValue}
                </Badge>
                <Form.Control
                  type="range"
                  id="pitch"
                  className="custom-range webspeech-space-css" 
                  min="0"
                  max="2"
                  value={pitchValue}
                  step="0.1"
                  onChange={(e) => setPitchValue(e.target.value)}
                  style={{ float: 'right' }}
                  data-aos='zoom-in' data-aos-duration='3000' data-aos-delay="300"

                />
               
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  id="voice-select"
                  className="form-control form-control-lg webspeech-space-css1"
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  data-aos='fade-up' data-aos-duration='1000' data-aos-easing="ease-in-out" data-aos-delay="800"
                >
                  {voices.map((voice, index) => (
                    <option key={index} value={voice.name + '(' + voice.lang + ')'}>
                      {voice.name + '(' + voice.lang + ')'
                      }
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
                <Button
                  variant="light"
                  size="lg"
                 className='webspeech-btn-space1'
                  onClick={speak}
                >
                  <span style={{ paddingRight: '10px' }}></span>
                  <VscUnmute
                    size={28}
                    color="#45aaf2"
                   
                    className="icon webspeech-btn-space1_1"
                  />
                  HEAR IT
                </Button>

                <Button
                  variant="light"
                  size="lg"
                 className='webspeech-btn-spaces2_1'
                  onClick={stopSpeaking}
                >
                  <span style={{ paddingRight: '10px' }}></span>
                  <BiVolumeMute
                    size={28}
                    color="#45aaf2"
                   
                    className="icon webspeech-btn-space2_2"
                  />
                  STOP
                </Button>
              </div>

            </Form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WebSpeech;
