import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const options = <>
        
            <li className='text-lg'><Link to="/">Home</Link></li>
            <li className='text-lg'><a href='#about'>About</a></li>
           
      
    </>

    return (
        <div className="navbar fixed z-10 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {options}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">Tanvir Hossain</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {options}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    );
};

export default NavBar;