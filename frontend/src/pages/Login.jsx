// import React from 'react';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import logo from './Components/assets/logo_cloud.gif';
import '../assets/styles/Login.css';
import '../assets/styles/Main.css';
import Footer from '../components/Footer' 
import Navbar from '../components/Navbar'
import { FaLock,FaMailBulk} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../slices/adminApiSlice.js';
import {setCredentials} from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
// import { ImLock} from "react-icons/"; FaUserGraduate
// import axios from 'axios';
// import React,{useState} from 'react'






function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const { adminInfo } = useSelector((state) => state.auth);


    useEffect(() => {
    if (adminInfo){
        navigate('/dashboard');
    }
   },[navigate, adminInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

     try{
       
        const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({...res}))
        navigate('/dashboard');
        toast.success('Login Successful');
 
    }
     catch (err){
       toast.error(err?.data?.message || err.error);

     }
    };


return (

        <>
        <Navbar />
        <section style={{backgroundColor:'#ecf0f1', borderBottom:'10px solid #182C61'}} >
        <br/>
        <br/>
        <br/>
        <div className="wrapper">
        <div className="logo">
        </div>
        <div className="text-center mt-4 name" style={{color:'#0095ff', letterSpacing:'1px', fontWeight:'900',fontSize:'26px'}}>
            FOLIO
         </div>
        <form className="p-3 mt-3"  onSubmit={submitHandler} >

            <div className="form-field d-flex align-items-center"  style={{color:'#182C61'}}>
            <FaMailBulk size={23} color='#45aaf2' className='icon'/>
                <input type="email" name="email" id="email" placeholder="Email"
                 value={email}
                 onChange={ (e) => setEmail(e.target.value.toLowerCase()) }    
                 />
            </div>

            <div className="form-field d-flex align-items-center" style={{color:'#182C61'}}>
            <FaLock size={22} color='#45aaf2' className='icon'/>
                <input type="password" name="password" id="password" placeholder="Password"
                 value={password}
                 onChange={ (e) => setPassword(e.target.value) } 
                
                />
            </div>
        { isLoading && <Loader /> }
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6"><br/>
            This page is only for Admin 😊<Link to="/"><br></br>⬅️ Please Go Back</Link>
        </div>
    
    </div>
    </section>
    <Footer />
    </>
);

}

export default Login;