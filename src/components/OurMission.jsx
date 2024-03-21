import React from "react";
import missionImg from "../assets/Mission & Vision/mission.svg";

const OurMission = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-20">
      <div className="w-full">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-secondary">Our Mission</h1>
        <p className="text-justify md:w-[95%] leading-relaxed">
          Our mission is provide to a platform for students to explore their interests in technology, develop their technical skills, and network with like-minded individuals. The club was founded with the aim of creating a community of students who share a passion for computer science and technology. We host a variety of events and activities, such as coding workshop, tech talks, project competitions, to help students expand their knowledge and skills in this dynamic and ever-growing field.
        </p>
      </div>
      <div className="w-2/3 md:w-2/4">
        <img className="w-full" src={missionImg} alt="Mission Image" />
      </div>
    </section>
  );
};

export default OurMission;
