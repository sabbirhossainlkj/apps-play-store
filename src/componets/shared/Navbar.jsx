import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import Apps from '../../pages/Apps/Apps';

const Navbar = () => {
    return (
        <nav className=' flex justify-between items-center shadow-2xl p-4 '>
            <img className='h-[60px]' src={logo} alt="" />
            <ul className='flex justify-between gap-3 items-center'>
                <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 font-bold' : ''} to={'/'}>Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 font-bold' : ''} to={'/apps'}>Apps</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 font-bold' : ''} to={'/installapps'}>Installation</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 font-bold' : ''} to={'/dashboard'}>Dashboard</NavLink></li>
            </ul>
            <button className='btn btn-outline'><FaGithub /> Contribute</button>
        </nav>
    );
};

export default Navbar;