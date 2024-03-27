import React from "react";
import visionImg from "../assets/Mission & Vision/vission.svg";


const OurVision = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-20">
      <div className="w-2/3 md:w-2/4">
        <img className="w-full" src={visionImg} alt="Mission Image" />
      </div>
      <div className="w-full">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-secondary">
          Our Vision
        </h1>
        <p className="text-justify leading-relaxed">
          Our vision is create a community of passionate learners and problem solvers who are equipped with the knowledge and practical experience to tackle the challenges of the digital era. We aspire to cultivate a culture of continuous learning, critical thinking and innovation within the club. Through various activities and initiatives, we aim to bridge the gap between theory and practice, enabling our members to apply their skills in practical scenarios. 
        </p>
      </div>
    </section>
  );
};

export default OurVision;
