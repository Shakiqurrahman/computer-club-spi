import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/developers/shake-b&w.png";
import img2 from "../assets/developers/soumik.png";

const Developers = () => {
  return (
    <div className=" bg-[#f4f5f8] p-4 py-12 sm:p-20 rounded-[30px]">
      <h1 className="text-center text-secondary text-2xl sm:text-4xl font-semibold mb-12">
        " Meet The <span className="text-blue-600">Developers</span> "
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full flex flex-col justify-center items-center bg-white  sm:p-16 px-5 py-10 rounded-[30px] drop-shadow-2xl shadow-md border border-gray-300 hover:border-secondary duration-300 relative overflow-hidden">
        <svg className="absolute top-0 -z-10" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path
              d="M0,100 C150,200 250,0 550,200 L500,00 L0,0 Z"
              style={{stroke: 'none', fill:'#e2e8f0'}}
            ></path>
          </svg>

          <img
            className="bg-white rounded-full w-[150px] ring-2 ring-[#2030e0] ring-offset-2"
            src={img1}
            alt="Cheif Instructor Image"
          />

          <h2 className="mt-6 text-lg sm:text-xl font-bold text-[#2030e0] flex items-center gap-2">
            Shakiqur Rahman
          </h2>
          <p className="text-[12px] sm:text-sm  tracking-wider font-semibold uppercase">
            Web developer
          </p>
          <div className="flex gap-4 mt-5">
            <Link
              target="_blank"
              to="https://www.facebook.com/shakqur.rahmankayum"
            >
              <FaFacebookF className="text-black bg-slate-100 p-1.5 rounded-sm size-8 shadow-md hover:bg-blue-600 hover:text-white duration-300" />
            </Link>
            <Link target="_blank" to="https://github.com/Shakiqurrahman">
              <FaGithub className="text-black bg-slate-100 p-1.5 rounded-sm size-8 shadow-md hover:bg-blue-600 hover:text-white duration-300" />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/shakiqurrahman/"
            >
              <FaLinkedin className="text-black bg-slate-100 p-1.5 rounded-sm size-8 shadow-md hover:bg-blue-600 hover:text-white duration-300" />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-white  sm:p-16 px-5 py-10 rounded-[30px] drop-shadow-2xl shadow-md border border-gray-300 hover:border-secondary duration-300 relative overflow-hidden">
           <svg className="absolute top-0 -z-10" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path
              d="M0,100 C150,200 250,0 550,200 L500,00 L0,0 Z"
              style={{stroke: 'none', fill:'#e2e8f0'}}
            ></path>
          </svg>
          <img
            className="bg-white rounded-full w-[150px] ring-2 ring-[#2030e0] ring-offset-2"
            src={img2}
            alt="Cheif Instructor Image"
          />

          <h2 className="mt-6 text-lg sm:text-xl font-bold text-[#2030e0] flex items-center gap-2">
            Soumik Sarkar
          </h2>
          <p className="text-[12px] sm:text-sm tracking-wider font-semibold uppercase ">
            Web developer
          </p>
          
          <div className="flex gap-4 mt-5">
            <Link
              target="_blank"
              to=""
            >
              <FaFacebookF className="text-black bg-slate-100 p-1.5 rounded-sm size-8 shadow-md hover:bg-blue-600 hover:text-white duration-300" />
            </Link>
            <Link target="_blank" to="">
              <FaGithub className="text-black bg-slate-100 p-1.5 rounded-sm size-8 shadow-md hover:bg-blue-600 hover:text-white duration-300" />
            </Link>
            <Link
              target="_blank"
              to=""
            >
              <FaLinkedin className="text-black bg-slate-100 p-1.5 rounded-sm size-8 shadow-md hover:bg-blue-600 hover:text-white duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
