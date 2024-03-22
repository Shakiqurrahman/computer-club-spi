import React from "react";
import img1 from "../assets/teachers/CI-Mam.png";
import img2 from "../assets/teachers/Ci-sir.png";

const CheifInstructors = () => {
  const chiefInstructorsData = [
    {
      id: 1,
      name: "Ruma Akhtar",
      profession: "Head of the Department",
      shift: "1st",
      img: img1,
      desq: `As we
            embark on another exciting chapter in the journey of the SPI Computer
            Club, I am filled with hope and optimism for the incredible achievements that lie ahead. Together, let us continue to push the boundaries of what is possible, inspire one another, and pave the way for a brighter, more technologically-empowered future.`,
    },
    {
      id: 2,
      name: "Poritosh Modak",
      profession: "Head of the Department",
      shift: "2nd",
      img: img2,
      desq: `As we
            embark on another exciting chapter in the journey of the SPI Computer
            Club, I am filled with hope and optimism for the incredible achievements that lie ahead. Together, let us continue to push the boundaries of what is possible, inspire one another, and pave the way for a brighter, more technologically-empowered future.`,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-10">
      {chiefInstructorsData.map((data) => (
        <div
          className="w-full flex flex-col justify-center items-center bg-slate-100 sm:p-16 px-5 py-14 rounded-[30px] drop-shadow-2xl"
          key={data.id}
        >
          <img
            className="rounded-full w-[150px] ring-2 ring-[#2030e0] ring-offset-2"
            src={data.img}
            alt="Cheif Instructor Image"
          />
          {/* <p className="text-justify mt-6">{data.desq}</p> */}
          <h2 className="mt-6 text-lg font-bold text-[#2030e0] flex items-center gap-2">{data.name}</h2>
          <p className="text-sm tracking-wider font-semibold uppercase mt-0.5">{data.profession} - {data.shift} Shift</p>
        </div>
      ))}
    </div>
  );
};

export default CheifInstructors;
