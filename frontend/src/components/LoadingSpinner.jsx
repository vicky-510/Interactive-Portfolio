import '../assets/styles/LoadingSpinner.css';
import { ScaleLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <ScaleLoader color="#3498db" />
    </div>
  );
};

export default LoadingSpinner;