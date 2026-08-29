import { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import DashNav from '../DashNav';
import MobileNav from '../MobileNav';
import useAdminTheme from '../../utils/useAdminTheme';

function DashboardLayout({ title, children }) {
  useAdminTheme();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div className="dash-shell">
      <Sidebar collapsed={collapsed} onToggleCollapse={toggleCollapsed} />
      <div
        className="dash-main dash-main-shifted admin-dash-main"
        style={{ marginLeft: collapsed ? 76 : 240 }}
      >
        <DashNav Toggle={toggleCollapsed} title={title} />
        <div className="dash-content">
          {children}
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

DashboardLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
