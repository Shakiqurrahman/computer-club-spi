import React from "react";
import Lottie from "lottie-react";
import contactGIF from "../assets/GIF/Contact.json";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center sm:gap-10">
      <div className="w-full lg:w-[90%] flex justify-center">
        <Lottie animationData={contactGIF} />
      </div>
      <form className="w-full flex flex-col gap-5 bg-[#f4f4f4e3] md:bg-[#e8e4fb]/85 rounded-[30px] sm:p-10 p-8">
        <div className="mb-5">
          {/* <p className="text-center uppercase tracking-widest mb-1 text-secondary">
              Any Query?
            </p> */}
          <h3 className="text-center text-3xl font-bold text-blue-600">
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
          className="mt-3 py-3 px-4 w-full border border-transparent text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-blue-600  text-lg font-semibold  rounded-md duration-300 "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
