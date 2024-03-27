import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  }
  return (
    <header className="bg-white fixed top-0 z-10 w-full">
      <div className="max-width bg-white flex h-16 w-full justify-between items-center border-b ">
        <div className="flex items-center">
          <img className="h-10" src={logo} alt="Logo" />
          <h1 className="text-lg font-semibold font-poppins">Computer Club</h1>
        </div>

        <nav>

          <ul
            className={
              isOpen
                ? "side-nav"
                : "nav-links  md:flex gap-x-10 text-[15px]"
            }
          >
            <NavLink to="/">
            <li className="hover:text-[#2030e0] duration-300"
            onClick={handleClose}>
              Home
            </li>
            </NavLink>
            <NavLink to="/events">
            <li className="hover:text-[#2030e0] duration-300"
            onClick={handleClose}>
              Events
            </li>
            </NavLink>
            <NavLink to="/notice">
            <li className="hover:text-[#2030e0] duration-300"
            onClick={handleClose}>
              Notice
            </li>
            </NavLink>
            <NavLink to="/result">
            <li className="hover:text-[#2030e0] duration-300"
            onClick={handleClose}>
              Result
            </li>
            </NavLink>
            <NavLink to="/about">
            <li className="hover:text-[#2030e0] duration-300"
            onClick={handleClose}>
              About
            </li>
            </NavLink>

            <li className="hover:text-[#2030e0] duration-300"
            onClick={handleClose}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div
          className="md:hidden w-10 h-[38px] p-2 bg-secondary rounded-[4px] cursor-pointer flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={isOpen ? "active-hamburger" : "hamburger"}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
