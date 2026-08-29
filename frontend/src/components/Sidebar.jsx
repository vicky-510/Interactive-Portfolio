import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';
import {
  BsBoxArrowRight, BsSpeedometer2,
  BsPersonBadge, BsBriefcase, BsStickyFill,
  BsCalendarCheck, BsGearFill, BsChevronLeft, BsChevronRight,
} from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/adminApiSlice';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';

export const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: BsSpeedometer2 },
  { href: '/profile', label: 'Profile', icon: BsPersonBadge },
  { href: '/jobvita', label: 'JobVita', icon: BsBriefcase },
  { href: '/notes', label: 'Notes', icon: BsStickyFill },
  { href: '/interviews', label: 'Interviews', icon: BsCalendarCheck },
  { href: '/settings', label: 'Settings', icon: BsGearFill },
];

function Sidebar({ collapsed = false, onToggleCollapse }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/admin-login');
      toast.success('Logged out successfully');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`dash-sidebar ${collapsed ? 'dash-sidebar-collapsed' : ''}`}>
      <div className='dash-sidebar-brand'>
        <span className="dash-sidebar-brand-text">Vwaran</span>
        {onToggleCollapse && (
          <button
            type="button"
            className="dash-collapse-toggle admin-icon-btn"
            onClick={onToggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <BsChevronRight /> : <BsChevronLeft />}
          </button>
        )}
      </div>

      <nav className='dash-sidebar-nav'>
        {navItems.map(({ href, label, icon: Icon }) => (
          <NavLink
            key={label}
            to={href}
            className={({ isActive }) =>
              `dash-sidebar-link ${isActive ? 'dash-sidebar-link-active' : ''}`
            }
          >
            <Icon size={19} className='dash-sidebar-icon' />
            <span>{label}</span>
            {collapsed && <span className="dash-sidebar-tooltip">{label}</span>}
          </NavLink>
        ))}

        <a className='dash-sidebar-link dash-sidebar-logout' onClick={logoutHandler} role="button">
          <BsBoxArrowRight size={19} className='dash-sidebar-icon' />
          <span>Logout</span>
          {collapsed && <span className="dash-sidebar-tooltip">Logout</span>}
        </a>
      </nav>
    </div>
  )
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  onToggleCollapse: PropTypes.func,
};

export default Sidebar
