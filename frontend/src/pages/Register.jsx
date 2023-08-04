// import React from 'react';
// // import axios from 'axios';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import '../assets/styles/Main.css';
// import logo from '../assets/img/logo_cloud.gif';
import '../assets/styles/Login.css';
// import Footer from '../components/Footer'      
import { FaUserGraduate,FaLock, FaMailBulk, FaPhoneAlt} from "react-icons/fa";
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/adminApiSlice';
import {setCredentials} from '../slices/authSlice';
// import { ImLock} from "react-icons/im";
// import React,{useState} from 'react';
import Sidebar from '../components/Sidebar'
import DashNav from '../components/DashNav';
import { PiUserCirclePlusFill} from "react-icons/pi";



function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { adminInfo } = useSelector((state) => state.auth);

    const [register, { isLoading }] = useRegisterMutation();

    
    useEffect(() => {
       
       },[navigate, adminInfo]);
    

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error('Passwords do not match')
        }else{
            try{
                const res = await register({name, email,phone, password }).unwrap();
                dispatch(setCredentials({...res}))
                navigate('/dashboard');
                toast.success('Admin Created Successfully!');            }
            catch(err){
                toast.error(err?.data?.message || err.error);

            }
        }

    }

 const [toggle, setToggle] = useState(true);

    const Toggle = () => {
      setToggle(!toggle)
    }

  return (
    <div>
       
    <>
    <div style={{backgroundColor:'#ecf0f1'}} >  
    {/* style={{marginTop:'130px'}} */}
     
        <div className='container-fluid min-vh-100'>
         <div className='row'>
           {toggle && <div className="col-4 col-md-2 bg-white min-vh-100 position-fixed">
            <Sidebar />
            </div>}
    {toggle && <div className="col-4 col-md-2"></div>}


    <div className="col">
    <DashNav  Toggle={Toggle} />
    <div className="wrapper">
    <div className="text-center mt-4 name" style={{color:'#0095ff', letterSpacing:'1px', fontWeight:'900',fontSize:'26px'}}>
    <PiUserCirclePlusFill size={70} color='#45aaf2' className='icon' style={{marginRight:'10px'}}/>

     </div>
    <form className="p-3 mt-3"  onSubmit={submitHandler} >
        <div className="form-field d-flex align-items-center"  style={{color:'#182C61'}}>
        <FaUserGraduate size={22} color='#45aaf2' className='icon'/>
            <input type="text" name="name" id="name" placeholder="Name"  
             value={name}
             onChange={ (e) => setName(e.target.value) }  
            
            />
        </div>
        
        <div className="form-field d-flex align-items-center" style={{color:'#182C61'}}>
        <FaMailBulk size={22} color='#45aaf2' className='icon'/>
            <input type="email" name="email" id="email" placeholder="Email" 
             value={email}
             onChange={ (e) => setEmail(e.target.value.toLowerCase()) }  
            
            />
        </div>


        <div className="form-field d-flex align-items-center" style={{color:'#182C61'}}>
        <FaPhoneAlt size={21} color='#45aaf2' className='icon'/>
            <input type="tel" name="phone" id="phone" placeholder="Phone number" 
             value={phone}
             onChange={ (e) => setPhone(e.target.value) }  
            
            />
        </div>

        
        <div className="form-field d-flex align-items-center" style={{color:'#182C61'}}>
        <FaLock size={20} color='#45aaf2' className='icon'/>
            <input type="password" name="password" id="password" placeholder="Password" 
             value={password}
             onChange={ (e) => setPassword(e.target.value) }  
            
            />
        </div>


        <div className="form-field d-flex align-items-center" style={{color:'#182C61'}}>
        <FaLock size={20} color='#45aaf2' className='icon'/>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" 
             value={confirmPassword}
             onChange={ (e) => setConfirmPassword(e.target.value) }  
            
            />
        </div>
        <div className="text-center fs-6">
        {isLoading && <Loader />}
    </div>

        <button className="btn mt-3">Register</button>


         {/* <Link to="/dashboard">Go Back</Link>  <a href="/login">Login</a> */}


    </form>
   
</div>
</div>
            
            </div>
           </div>
   
   
        </div></>  

</div>
  );
}


export default Register;