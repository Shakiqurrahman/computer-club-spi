import React from "react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const EventPage = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-3xl mb-1 text-secondary">
        Events
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
        <span className="text-[#2030e0]">Events</span>
      </h3>
      <div className="mt-20 mb-32">

      </div>
    </>
  );
};

export default EventPage;
