import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="bg-white fixed top-0 z-10 w-full">
        <div className="max-width bg-white flex h-16 w-full justify-between items-center border-b ">
        <div className="flex items-center">
        <img className="h-10" src={logo} alt="Logo" />
        <h1 className="text-lg font-semibold font-poppins">Computer Club</h1>
        </div>
      <nav>
        <ul className="flex gap-x-10 text-[15px]">
          <li className="hover:text-orange-700 duration-300">
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:text-orange-700 duration-300">
            <NavLink to="/events">Events</NavLink>
          </li>
          <li className="hover:text-orange-700 duration-300">
            <NavLink to="/notice">Notice</NavLink>
          </li>
          <li className="hover:text-orange-700 duration-300">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-orange-700 duration-300">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
        </div>
    </header>
  );
};

export default Header;
