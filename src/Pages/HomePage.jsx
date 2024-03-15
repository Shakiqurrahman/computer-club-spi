import Lottie from "lottie-react";
import computerGIF from "../assets/computer.json";
import Hero from "../components/shared/Hero";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <div className="flex items-center mt-6">
        <div className="w-full">
          <Lottie animationData={computerGIF} />
        </div>
        <div className="w-full">
          <p className=" text-justify">
            Established in 2023, our computer club is a dynamic community of
            tech enthusiasts, programmers, and innovators dedicated to exploring
            the ever-evolving world of technology. From coding workshops to
            hackathons, we provide a platform for members to unleash their
            creativity, share knowledge, and collaborate on exciting projects.
            Whether you're a seasoned developer or just starting your journey in
            the digital realm, join us as we embark on a journey of learning,
            discovery, and endless possibilities in the realm of computing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
