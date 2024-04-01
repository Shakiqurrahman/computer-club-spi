import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/result-banner.svg";

const ResultBanner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
      <div className="w-full">
        <img className="w-[80%] mx-auto md:mx-0" src={img} alt="Image" />
      </div>
      <div className="w-full md:mt-16 flex flex-col justify-center items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary text-center mb-4">
          "Check BTEB Results Easily - Quick <br /> and Convenient!"
        </h2>
        <p className="text-center">
          <span className="bg-slate-200 text-secondary px-2 py-0.5 rounded-md font-semibold">
            Struggling to find BTEB results?
          </span>{" "}
          Not anymore! We've simplified the process for you. Easily access your
          diploma or polytechnic results with just one click. Discover the
          effortless way to check your result!
        </p>

        <Link to="/results">
        <button className="relative group overflow-hidden px-5 py-3 rounded-lg flex items-center bg-blue-600 hover:bg-blue-600/90 duration-300 mt-6 ring ring-blue-600 ring-offset-2">
          <span className="relative text-sm text-white">Get Result</span>
          <div className="flex items-center -space-x-3 translate-x-3">
            <div className="w-4 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
        </Link>
      </div>
    </section>
  );
};

export default ResultBanner;
