import { Routes, Route } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import lazyWithRetry from './utils/lazyWithRetry';


const Home = lazyWithRetry(() => import('./pages/Home'), 'Home');
const VoicePort = lazyWithRetry(() => import('./pages/VoicePort'), 'VoicePort');
const Login = lazyWithRetry(() => import('./pages/Login'), 'Login');
const Register = lazyWithRetry(() => import('./pages/Register'), 'Register');
const Profile = lazyWithRetry(() => import('./pages/Profile'), 'Profile');
const Contact = lazyWithRetry(() => import('./pages/Contacts'), 'Contacts');
const Dashboard = lazyWithRetry(() => import('./pages/Dashboard'), 'Dashboard');
const BlogRole = lazyWithRetry(() => import('./pages/BlogRole'), 'BlogRole');
const PrivateRoute = lazyWithRetry(() => import('./components/PrivateRoute'), 'PrivateRoute');
// const Demo = lazy(() => import('./components/Demo'));


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />} >

        <ToastContainer />

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/VoicePort" element={<VoicePort />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/blog/why-i-chose-fullstack-development" element={<BlogRole />} />

          {/* <Route path="/demo" element={<Demo />} /> */}

          {/* Private Routes */}
          <Route path='' element={<PrivateRoute />} >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
      </ErrorBoundary>

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
