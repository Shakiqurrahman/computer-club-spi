import React from "react";
import { FaShapes } from "react-icons/fa6";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import img from "../assets/teachers/principal.webp";

const Principal = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#f6f5f1] sm:p-20 px-5 py-14 rounded-[30px] drop-shadow-2xl shadow-md border border-gray-300 lg:hover:border-secondary duration-300 relative overflow-hidden">
      <div className="size-[300px] -z-10 rounded-full bg-slate-200/70 absolute -top-40 right-16"></div>
      <div className="size-[300px] -z-10 rounded-full bg-slate-200 absolute -top-24 -right-20"></div>
      {/* <div className="w-full h-[104%] bg-slate-200  absolute -z-10 opacity-50  rotate-45"></div>
      <div className="w-full h-full bg-gradient-to-r from-slate-300 via-green-100 absolute top-0 -z-10 rotate-45"></div> */}
      {img ? (
        <img
          className=" rounded-full min-w-[200px] max-w-[200px] ring ring-[#2030e0] ring-offset-2"
          src={img}
          alt="Principal Image"
        />
      ) : (
        <div className="min-w-[200px] max-w-[200px] bg-slate-200 animate-pulse min-h-[200px] rounded-full"></div>
      )}
      <p className="text-center mt-6 lg:w-[85%]">
        <RiDoubleQuotesL color="#2030e0" size={20} className=" inline" /> As we
        embark on another exciting chapter in the journey of the SPI Computer
        Club, I am filled with hope and optimism for the incredible achievements
        that lie ahead. Together, let us continue to push the boundaries of what
        is possible, inspire one another, and pave the way for a brighter, more
        technologically-empowered future.
        <RiDoubleQuotesR size={20} color="#2030e0" className=" inline" />
      </p>
      <h2 className="mt-4 sm:text-lg text-xl font-bold text-[#2030e0] flex items-center gap-2">
        <FaShapes /> Mohammed Rehan Uddin <FaShapes />
      </h2>

      <p className="text-sm tracking-wider font-semibold uppercase mt-0.5">
        Principal Of SPI
      </p>
    </div>
  );
};

export default Principal;
