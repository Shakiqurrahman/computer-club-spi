import Lottie from "lottie-react";
import computerGIF from "../assets/GIF/computer.json";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-[30px] sm:text-[40px] font-bold text-[#f45183] text-center mb-1 uppercase tracking-wide leading-tight">
          "Welcome to the <br /> SPI Computer Club"
        </h1>
        <p className="text-sm sm:text-[16px] mb-4 text-center tracking-widest border-b border-gray-400 pb-10">
          Uniting Minds, Igniting Innovation - Join Our Computer Club Today!
        </p>
        <div className="md:flex space-y-8 md:space-x-0 items-center my-6">
          <div className="w-full">
            <Lottie animationData={computerGIF} />
          </div>
          <div className="w-full">
            <p className=" text-justify">
              Welcome to the Sylhet Polytechnic Institute (SPI) Computer Club, a
              dynamic and student-driven non-profit and non-political
              organization operating in collaboration with the Department of
              Computer Science and Engineering (CSE) at the esteemed Sylhet
              Polytechnic Institute. Our computer club is a dynamic community of
              tech enthusiasts, programmers, and innovators dedicated to
              exploring the ever-evolving world of technology. From coding
              workshops to hackathons, we provide a platform for members to
              unleash their creativity, share knowledge, and collaborate on
              exciting projects. Whether you're a seasoned developer or just
              starting your journey in the digital realm, join us as we embark
              on a journey of learning, discovery, and endless possibilities in
              the realm of computing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
