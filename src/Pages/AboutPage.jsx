import React from "react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import Principal from "../components/Principal";
import CheifInstructors from "../components/CheifInstructors";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-md font-normal flex justify-center items-center">
        <Link
          className="hover:text-[#2030e0] duration-300 flex items-center gap-1.5"
          to="/"
        >
          <FaHome size={20} />
          Home
        </Link>{" "}
        <MdNavigateNext size={22} />{" "}
        <span className="text-[#2030e0]">About</span>
      </h1>
      <div className="mt-20 mb-32">
        <div className="mb-10">
        <Principal />
        </div>
        <CheifInstructors />
      </div>
      <div className="my-32">
        <OurMission />
      </div>
      <div className="my-32">
        <OurVision />
      </div>
    </div>
  );
};

export default AboutPage;
