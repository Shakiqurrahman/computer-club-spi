import { useState } from "react";
import logo from "/public/logo.jpg";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Bar from "./sidebar-mobile/sidebar";

const DNavbar = () => {
  const [isSide, setisSide] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3 flex items-center justify-between">
        <div className="flex items-center gap-3 justify-start">
          <div
            onClick={() => setisSide(!isSide)}
            className=" lg:hidden duration-500 ease-in-out"
          >
            {isSide ? <IoClose size={30} /> : <IoMdMenu size={30} />}
          </div>
          <Link
            to="/"
            className="text-xl font-bold flex items-center lg:ml-2.5"
          >
            <img src={logo} className=" h-12 mr-2" alt="Logo" />
          </Link>
          {/* <form action="#" method="GET" className="hidden lg:block lg:pl-32">
            <label htmlFor="topbar-search" className="sr-only">
              Search
            </label>
            <div className="mt-1 relative lg:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                placeholder="Search"
              />
            </div>
          </form> */}
        </div>
        <div className="items-center sm:gap-2.5 gap-1.5   flex">
          <p className="text-sm sm:text-md font-semibold text-secondary">
            Welcome To Dashboard{" "}
          </p>
          <FaUserCircle size={30} className="text-secondary" />
        </div>
      </div>
      {isSide && <Bar toggol={() => setisSide(!isSide)} />}
    </nav>
  );
};

export default DNavbar;
