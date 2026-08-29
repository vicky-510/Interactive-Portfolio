import { Routes, Route } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/admin-components.css';
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
const JobVita = lazyWithRetry(() => import('./pages/JobVita'), 'JobVita');
const JobVitaForm = lazyWithRetry(() => import('./pages/JobVitaForm'), 'JobVitaForm');
const Notes = lazyWithRetry(() => import('./pages/Notes'), 'Notes');
const Interviews = lazyWithRetry(() => import('./pages/Interviews'), 'Interviews');
const Settings = lazyWithRetry(() => import('./pages/Settings'), 'Settings');
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
            <Route path="/jobvita" element={<JobVita />} />
            <Route path="/jobvita/new" element={<JobVitaForm />} />
            <Route path="/jobvita/:id/edit" element={<JobVitaForm />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="/settings" element={<Settings />} />
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
