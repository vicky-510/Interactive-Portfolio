import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BsBoxArrowRight, BsSpeedometer2,
  BsPersonBadge, BsPersonPlus,
} from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/adminApiSlice';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: BsSpeedometer2 },
  { href: '/profile', label: 'Profile', icon: BsPersonBadge },
  { href: '/register', label: 'Add Admin', icon: BsPersonPlus },
];

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
    <div className='dash-sidebar'>
      <div className='dash-sidebar-brand'>Vwaran</div>

      <nav className='dash-sidebar-nav'>
        {navItems.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className={`dash-sidebar-link ${pathname === href ? 'dash-sidebar-link-active' : ''}`}
          >
            <Icon size={19} className='dash-sidebar-icon' />
            <span>{label}</span>
          </a>
        ))}

        <a className='dash-sidebar-link dash-sidebar-logout' onClick={logoutHandler}>
          <BsBoxArrowRight size={19} className='dash-sidebar-icon' />
          <span>Logout</span>
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
