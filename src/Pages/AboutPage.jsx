import React from "react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import CheifInstructors from "../components/CheifInstructors";
import FAQs from "../components/FAQs";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import Principal from "../components/Principal";

const AboutPage = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-3xl mb-1 text-secondary">
        About
      </h1>
      <h3 className="text-md font-normal flex justify-center items-center">
        <Link
          className="hover:text-[#2030e0] duration-300 flex items-center gap-1.5"
          to="/"
        >
          <FaHome size={18} />
          Home
        </Link>{" "}
        <MdNavigateNext size={22} />{" "}
        <span className="text-[#2030e0]">About</span>
      </h3>
      <div className="mt-20 mb-20 sm:mb-32">
        <div className="mb-10">
          <Principal />
        </div>
        <CheifInstructors />
      </div>
      <div className="my-16 sm:my-32">
        <OurMission />
      </div>
      <div className="my-16 sm:my-32">
        <OurVision />
      </div>
      <div className="my-16 sm:my-32">
        <FAQs />
      </div>
    </>
  );
};

export default AboutPage;
