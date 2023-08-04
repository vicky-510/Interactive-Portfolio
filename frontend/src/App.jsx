import { Routes, Route } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import VoicePort from './pages/VoicePort';
import Login from './pages/Login';
import Register from './Pages/Register';
import Profile from './pages/Profile';
import Contact from './pages/Contacts';
// import ContactList from './pages/ContactList';


// import Navbar from './components/Navbar';
// import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
// import ShowContacts from './pages/ShowContacts';


function App() {
  return (
    <>
          {/* <Navbar /> */}

      <ToastContainer />

        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/VoicePort" element={<VoicePort />} />
          <Route path="/Contact" element={<Contact />} />

          
           {/* Private Routes */}
          <Route path='' element={<PrivateRoute />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/Contacts" element={<ShowContacts />} /> */}

          </Route>
        </Routes>
    
      <HashLink smooth to="/#Home" />
      <HashLink smooth to="/#Projects" />
      <HashLink smooth to="/#Experience" />
      <HashLink smooth to="/#Skills" />
      <HashLink smooth to="/#Service" />
      <HashLink smooth to="/#About" />
      {/* <HashLink smooth to="/#Contact" /> */}
      {/* <HashLink smooth to="/VoicePort#web" /> */}
      {/* <HashLink smooth to="/VoicePort#Projects" />
      <HashLink smooth to="/VoicePort#Experience" />
      <HashLink smooth to="/VoicePort#Skills" />
      <HashLink smooth to="/VoicePort#Service" />
      <HashLink smooth to="/VoicePort#About" />
      <HashLink smooth to="/VoicePort#Contact" /> */}
    </>
  );
}

export default App;
