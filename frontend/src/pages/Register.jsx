import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { FaUserGraduate, FaLock, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/adminApiSlice';
import { setCredentials } from '../slices/authSlice';
import { PiUserCirclePlusFill } from "react-icons/pi";
import DashboardLayout from '../components/dashboard/DashboardLayout';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [register, { isLoading }] = useRegisterMutation();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
            return;
        }
        try {
            const res = await register({ name, email, phone, password }).unwrap();
            dispatch(setCredentials({ ...res }))
            navigate('/dashboard');
            toast.success('Admin Created Successfully!');
        }
        catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }

    return (
        <DashboardLayout title="Add Admin">
            <div className="dash-form-card">
                <div className="dash-form-header">
                    <PiUserCirclePlusFill size={44} className="dash-form-icon" />
                    <h4>Add a new admin</h4>
                </div>

                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3 dash-form-field">
                        <FaUserGraduate size={18} className="dash-form-field-icon" />
                        <Form.Control className="contact-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3 dash-form-field">
                        <FaMailBulk size={18} className="dash-form-field-icon" />
                        <Form.Control className="contact-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} required />
                    </Form.Group>

                    <Form.Group className="mb-3 dash-form-field">
                        <FaPhoneAlt size={17} className="dash-form-field-icon" />
                        <Form.Control className="contact-input" type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3 dash-form-field">
                        <FaLock size={17} className="dash-form-field-icon" />
                        <Form.Control className="contact-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3 dash-form-field">
                        <FaLock size={17} className="dash-form-field-icon" />
                        <Form.Control className="contact-input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </Form.Group>

                    {isLoading && <Loader />}

                    <Button type="submit" className="about-btn-primary dash-form-submit" disabled={isLoading}>Register</Button>
                </Form>
            </div>
        </DashboardLayout>
    );
}

export default Register;
