import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import Loding from './Loding';

const PrivetRouter = ({children}) => {
    const {myLogingUser,loding} = useContext(AuthContext);
    

    if(loding){
        return <div className='flex justify-center items-center h-[60%]'>
            <span className=" loading loading-spinner text-accent"></span>
        </div>
    }

    if(myLogingUser) {
        return children
    };

    return <Navigate to="/loging"></Navigate>
};

export default PrivetRouter;