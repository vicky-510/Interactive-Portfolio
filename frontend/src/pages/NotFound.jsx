import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../assets/styles/Main.css'
import { PulseLoader } from 'react-spinners';


export default function NotFound() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center text-center bg-light">

      <h1 className="mb-3 cls-color">404 - Page Not Found</h1>
      <p className="mb-3 cls-color1">You will be redirected to the Home page in 5 seconds ...</p>
      <PulseLoader  color="#3498db" />

    </div>
  );
}
