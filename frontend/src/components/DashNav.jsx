// import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { BsList, BsPersonCircle } from "react-icons/bs";
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../slices/adminApiSlice';
import { logout } from '../slices/authSlice';

function DashNav({ Toggle, title }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminInfo } = useSelector((state) => state.auth);
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
    <div className="dash-topbar">
      <div className="dash-topbar-left">
        <BsList size={26} className="dash-topbar-toggle" onClick={Toggle} />
        {title && <span className="dash-topbar-title">{title}</span>}
      </div>

      <Dropdown align="end">
        <Dropdown.Toggle as="div" className="dash-profile-chip">
          <BsPersonCircle size={26} />
          <span className="dash-profile-name">{adminInfo?.name}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logoutHandler}>Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

DashNav.propTypes = {
  Toggle: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default DashNav;
