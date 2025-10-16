import React, { useContext } from 'react';
import './nav.css'
import logo from '../assets/react.svg'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {myLogingUser} = useContext(AuthContext);
    return (
         <div className="bg-white/80">
    <div className="flex flex-col gap-4 md:flex-row items-center justify-between max-w-[1300px] mx-auto  p-3 text-black">
   <div className=" p-2 rounded-full bg-gray-400  ">
     <img src={logo}></img>
   </div>
     <div>
        <NavLink className="mr-4" to="/">Home</NavLink>
        <NavLink className="mr-4" to="/profile">Profile</NavLink>
        <NavLink className="mr-4" to="/loging">Login</NavLink>
        <NavLink className="mr-4" to="/register">Register</NavLink>
     </div>
     <div>
      {myLogingUser ? <button className="btn btn-secondary">Sign Out</button> 
      : <Link to="/loging"> <button className="btn btn-secondary">Sign In</button></Link>}
      

     </div>
   </div>
   </div>
    );
};

export default Navbar;