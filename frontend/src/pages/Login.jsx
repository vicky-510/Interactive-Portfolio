// import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/Main.css';
import { FaLock, FaMailBulk } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../slices/adminApiSlice.js';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const { adminInfo } = useSelector((state) => state.auth);


    useEffect(() => {
        if (adminInfo) {
            navigate('/dashboard');
        }
    }, [navigate, adminInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }))
            navigate('/dashboard');
            toast.success('Login Successful');
        }
        catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    return (
        <div className="login-split">
            <div className="login-split-brand">
                <p className="login-split-logo">Vwaran</p>
                <h2 className="login-split-heading">Admin Console</h2>
                <p className="login-split-text">Manage your portfolio content securely.</p>
            </div>

            <div className="login-split-form-col">
                <form className="login-form-card" onSubmit={submitHandler}>
                    <h3 className="login-form-title">Sign in</h3>
                    <p className="login-form-subtitle">This page is for Admin access only.</p>

                    <div className="dash-form-field login-field">
                        <FaMailBulk size={18} className="dash-form-field-icon" />
                        <input className="contact-input" type="email" name="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value.toLowerCase())}
                            required
                        />
                    </div>

                    <div className="dash-form-field login-field">
                        <FaLock size={18} className="dash-form-field-icon" />
                        <input className="contact-input" type="password" name="password" placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {isLoading && <Loader />}

                    <button className="about-btn-primary login-submit-btn" type="submit" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Login'}
                    </button>

                    <Link to="/" className="login-back-link">&larr; Back to site</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
