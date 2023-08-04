import { Navigate,Outlet } from "react-router-dom";
import {useSelector} from 'react-redux';



 function PrivateRoute() {

  const {adminInfo} = useSelector((state) => state.auth);
  return adminInfo ? <Outlet />: <Navigate to="/login" replace /> 
   
}

export default PrivateRoute;