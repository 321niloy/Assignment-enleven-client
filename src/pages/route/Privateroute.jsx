import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Provider/Authprovider';


const Privateroute = ({children}) => {
    const {user,loader} = useContext(Authcontext)
    const location = useLocation();
    console.log(location)
    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};


export default Privateroute;