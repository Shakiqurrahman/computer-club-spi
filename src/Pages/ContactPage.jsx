import Lottie from "lottie-react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import contactGIF from "../assets/GIF/email2.json";

const ContactPage = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-3xl mb-1 text-secondary">
        Contact
      </h1>
      <h3 className="text-md font-normal flex justify-center items-center">
        <Link
          className="hover:text-[#2030e0] duration-300 flex items-center gap-1.5"
          to="/"
        >
          <FaHome size={18} />
          Home
        </Link>
        <MdNavigateNext size={22} />
        <span className="text-[#2030e0]">Contact</span>
      </h3>
      <div className="md:my-32 mt-10 mb-32 flex flex-col lg:flex-row items-center justify-center sm:gap-20 gap-10">
        <div className="w-4/5 flex justify-center">
          <Lottie animationData={contactGIF} />
        </div>
        <form className="w-full flex flex-col gap-5  bg-[#e8e4fb]/85 rounded-[30px] sm:p-16 p-8">
          <div className="mb-5">
            {/* <p className="text-center uppercase tracking-widest mb-1 text-secondary">
              Any Query?
            </p> */}
            <h3 className="text-center text-3xl font-bold text-[#0067f6]">
              Contact Us
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              className="px-3 py-3 w-full outline-none  rounded-md"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
            <input
              className="px-3 py-3 w-full outline-none rounded-md"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>

          <input
            className="px-3 py-3 w-full outline-none rounded-md"
            type="text"
            name="Subject"
            placeholder="Email Subject"
            required
          />

          <textarea
            className="px-3 py-3 outline-none rounded-md resize-none h-28 sm:h-auto"
            name="Message"
            cols="30"
            rows="6"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-3 py-3 px-4 w-48 mx-auto border border-transparent text-white bg-blue-600 hover:bg-white hover:text-[#0067f6] hover:border-[#0067f6] text-lg font-semibold  rounded-md duration-300 "
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
