import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
                ? "side-nav text-[15px]"
                : "nav-links  md:flex gap-x-10 text-[15px]"
            }
          >
            <li className="hover:text-[#2030e0] duration-300">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-[#2030e0] duration-300">
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className="hover:text-[#2030e0] duration-300">
              <NavLink to="/notice">Notice</NavLink>
            </li>
            <li className="hover:text-[#2030e0] duration-300">
              <NavLink to="/result">Result</NavLink>
            </li>
            <li className="hover:text-[#2030e0] duration-300">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="hover:text-[#2030e0] duration-300">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div
          className="md:hidden size-9 px-1 bg-secondary rounded-[4px] cursor-pointer flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={isOpen ? "active-hamburger" : "hamburger"}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
