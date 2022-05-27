import { Outlet, Navigate } from 'react-router-dom';
import { get_logged_customer } from '../helpers/functions.js';

const NonAuthenticatedRoute = () => {
    
    const loggedUser = get_logged_customer();
    
    return loggedUser ? <Navigate to="/profile" />  : <Outlet /> 
}

export default NonAuthenticatedRoute;