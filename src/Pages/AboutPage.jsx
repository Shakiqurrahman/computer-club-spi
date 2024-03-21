import React from "react";
import {Link} from "react-router-dom";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center text-md font-normal">
        <Link className="hover:text-[#2030e0] duration-300" to="/">Home</Link> - <span className="text-[#2030e0]">About</span>
      </h1>
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
