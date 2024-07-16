import { Routes, Route } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';


const Home = lazy(() => import('./pages/Home'));
const VoicePort = lazy(() => import('./pages/VoicePort'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Profile = lazy(() => import('./pages/Profile'));
const Contact = lazy(() => import('./pages/Contacts'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
// const Demo = lazy(() => import('./components/Demo'));


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Suspense fallback={<LoadingSpinner />} >

        <ToastContainer />

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/VoicePort" element={<VoicePort />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/demo" element={<Demo />} /> */}

          {/* Private Routes */}
          <Route path='' element={<PrivateRoute />} >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>

      <HashLink smooth to="/#Home" />
      <HashLink smooth to="/#Projects" />
      <HashLink smooth to="/#Experience" />
      <HashLink smooth to="/#Skills" />
      <HashLink smooth to="/#Service" />
      <HashLink smooth to="/#About" />


    </>
  );
}

export default App;
