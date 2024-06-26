import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import img1 from "../assets/teachers/CI-Mam.webp";
import img2 from "../assets/teachers/Ci-sir.webp";

const CheifInstructors = () => {
  const chiefInstructorsData = [
    {
      id: 1,
      name: "Ruma Akhtar",
      profession: "Head of the Department",
      dept: "Computer Department",
      shift: "1st",
      img: img1,
      desq: `As we
            embark on another exciting chapter in the journey of SPI Computer
            Club. All the best SPI Computer Club.`,
    },
    {
      id: 2,
      name: "Poritosh Modak",
      profession: "Head of the Department",
      dept: "Computer Department",
      shift: "2nd",
      img: img2,
      desq: `As we
            embark on another exciting chapter in the journey of SPI Computer
            Club. All the best SPI Computer Club.`,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-10">
      {chiefInstructorsData.map((data) => (
        <div
          className="w-full flex flex-col justify-center items-center bg-white  sm:p-16 px-5 py-14 rounded-[30px] drop-shadow-2xl shadow-md border border-gray-300 lg:hover:border-secondary duration-300 relative overflow-hidden"
          key={data.id}
        >
          {/* <div className="w-full h-1/3 bg-[#a0b3b7] absolute top-0 -z-10"> */}
          <svg  
            className="absolute top-0 -z-10"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              d="M0,100 C150,200 250,0 550,200 L500,00 L0,0 Z"
              style={{ stroke: "none", fill: "#e2e8f0" }}
            ></path>
          </svg>
          {/* </div> */}

          {!data.img ? (
            <div className="min-w-[150px] max-w-[150px] bg-slate-200 animate-pulse min-h-[150px] rounded-full"></div>
          ) : (
            <img
              className=" rounded-full min-w-[150px] max-w-[150px] object-contain ring ring-[#2030e0] ring-offset-2"
              src={data.img}
              alt="Cheif Instructor Image"
            />
          )}
          <p className="text-center mt-6">
            <RiDoubleQuotesL color="#2030e0" size={20} className=" inline" />{" "}
            {data.desq}{" "}
            <RiDoubleQuotesR size={20} color="#2030e0" className=" inline" />
          </p>
          <h2 className="mt-6 text-lg sm:text-xl font-bold text-[#2030e0] flex items-center gap-2">
            {data.name}
          </h2>
          <p className="text-sm tracking-wider font-semibold uppercase mt-0.5">
            {data?.profession} - {data.shift} Shift
          </p>
          <p className="text-[12px] tracking-wider font-semibold uppercase mt-0.5">
            {data?.dept}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CheifInstructors;
