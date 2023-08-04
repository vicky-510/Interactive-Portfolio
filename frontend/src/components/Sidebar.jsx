import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  BsBack, BsSpeedometer,
  BsPerson, BsPersonBadge, 
  // BsBadge3DFill BsPhone,

} from "react-icons/bs";
import '../assets/styles/Dashboard.css'
import logo from '../assets/img/logo_white.gif'

import { useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {useLogoutMutation} from '../slices/adminApiSlice';
import {logout} from '../slices/authSlice';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';





function Sidebar() {



const dispatch = useDispatch();
const navigate = useNavigate();

const [logoutApiCall] = useLogoutMutation();

const logoutHandler = async ()=> {

   try{
    await logoutApiCall().unwrap();
    dispatch(logout());
    navigate('/login');
    toast.success(" Logged out Successful ")
   }
   catch(err){
    console.log(err);

   }

}


  return (
    <div className='bg-white sidebar p-2 '>
       <br/>
     
       <div className='m-2'>
       {/* <span className='brand-name fs-4'>FOLIO</span> */}
        <img src={logo} alt='logo' width='90px' style={{marginLeft:'40px'}}/>
       </div>

       <br/>
       <br/>
       <br/>

       <div className='list-group list-group-flush'>
        <a className='list-group-item py-2 ' style={{ borderRadius: '10px'}}  href='/dashboard'>
        <BsSpeedometer size={22} color='#45aaf2' style={{ marginLeft: '0px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icon' id='icon' />
        <span >Dashboard</span> 
        </a>
        <br/>

       

        <a className='list-group-item py-2' href='/profile'>
        <BsPersonBadge size={22} color='#45aaf2' style={{ marginLeft: '0px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icon' id='icon' />
        <span >Profile</span> 
        </a>
        <br/>

        <a className='list-group-item py-2' href='/register'>
        <BsPerson size={22} color='#45aaf2' style={{ marginLeft: '0px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icon' id='icon' />
        <span >Add Admin</span> 
        </a>
        <br/>

        {/* <a className='list-group-item py-2' href='/Contact'>
        <BsPhone size={22} color='#45aaf2' style={{ marginLeft: '0px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icon' id='icon' />
        <span >Contacts</span> 
        </a>
        <br/> */}

        {/* <a className='list-group-item py-2' href='/Hired'>
        <BsBadge3DFill size={22} color='#45aaf2' style={{ marginLeft: '0px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icon' id='icon' />
        <span >Hired</span> 
        </a>
        <br/> */}

        <a className='list-group-item py-2' onClick={ logoutHandler }>
        <BsBack size={22} color='#45aaf2' style={{ marginLeft: '0px', marginBottom: '8px',marginTop: '1px', marginRight:'8px' }} className='icon' id='icon' />
        <span >Logout</span> 
        </a>
        <br/>

       </div>

    </div>
  )
}

export default Sidebar