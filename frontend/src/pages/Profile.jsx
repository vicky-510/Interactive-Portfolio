import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { FaUserGraduate, FaLock, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { HiMiniUserCircle } from "react-icons/hi2";
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { setCredentials } from '../slices/authSlice';
import { useUpdateAdminMutation } from '../slices/adminApiSlice';
import DashboardLayout from '../components/dashboard/DashboardLayout';

function Profile() {
    const { adminInfo } = useSelector((state) => state.auth);

    const [name, setName] = useState(adminInfo.name);
    const [email, setEmail] = useState(adminInfo.email);
    const [phone, setPhone] = useState(adminInfo.phone);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const [updateProfile, { isLoading }] = useUpdateAdminMutation();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
            return;
        }
        try {
            const res = await updateProfile({ _id: adminInfo._id, name, email, phone, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            toast.success('Profile updated')
        }
        catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    }

    return (
        <DashboardLayout title="Profile">
            <div className="dash-form-card">
                <div className="dash-form-header">
                    <HiMiniUserCircle size={44} className="dash-form-icon" />
                    <h4>Update your profile</h4>
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
                        <Form.Control className="contact-input" type="password" placeholder="New password (optional)" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 dash-form-field">
                        <FaLock size={17} className="dash-form-field-icon" />
                        <Form.Control className="contact-input" type="password" placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>

                    {isLoading && <Loader />}

                    <Button type="submit" className="about-btn-primary dash-form-submit" disabled={isLoading}>Update Profile</Button>
                </Form>
            </div>
        </DashboardLayout>
    );
}

export default Profile;
