
import Sidebar from '../components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/Dashboard.css'
import DashHome from '../components/dashboard/DashHome';
import { useState } from 'react';

function Dashboard() {

  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle)
  }

// const dispatch = useDispatch();
// const navigate = useNavigate();

// const [logoutApiCall] = useLogoutMutation();

// const logoutHandler = async ()=> {

//    try{
//     await logoutApiCall().unwrap();
//     dispatch(logout());
//     navigate('/login');
//     toast.success(" Logged out Successful ")
//    }
//    catch(err){
//     console.log(err);

//    }

// }


  return (
    <div style={{backgroundColor:'#ecf0f1'}} >  
    {/* style={{marginTop:'130px'}} */}
     
        <div className='container-fluid min-vh-100'>
         <div className='row'>
           {toggle && <div className="col-4 col-md-2 bg-white min-vh-100 position-fixed">
            <Sidebar />
            </div>}
            {toggle && <div className="col-4 col-md-2"></div>}
            <div className="col">
              <DashHome Toggle={Toggle}  />
            </div>
            
         </div>
        </div>

        {/* <br/>
        <br/>
        <Link to="/Profile"><h1>profile</h1></Link>
        <Link to="/register"><h1>add new admin</h1></Link>
        <button onClick={ logoutHandler }>logout</button>
           */}


     </div>
  )
}


export default Dashboard;