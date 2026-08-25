import { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import DashNav from '../DashNav';

function DashboardLayout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="dash-shell">
      {sidebarOpen && <Sidebar />}
      <div className={`dash-main ${sidebarOpen ? 'dash-main-shifted' : ''}`}>
        <DashNav Toggle={toggleSidebar} title={title} />
        <div className="dash-content">
          {children}
        </div>
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
