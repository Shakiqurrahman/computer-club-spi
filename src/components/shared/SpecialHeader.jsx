import { NavLink } from "react-router-dom";

import logo from '../../assets/logo.png'
import { useEffect, useState } from "react";

const SpecialHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]); // Dependencies array to ensure useEffect runs only when lastScrollTop changes

  return (
    <div className={showHeader ? 'hidden' : 'show'}>
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
    </div>
  );
};

export default SpecialHeader;
