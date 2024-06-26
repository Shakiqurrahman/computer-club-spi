import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import EventCard from "../components/EventCard";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const API = "https://computer-club-spi.onrender.com/api/event/get";
  const getEvents = async (url) => {
    const res = await axios.get(url);
    const eventsData = await res.data.data;
    setEvents(eventsData);
  };
  useEffect(() => {
    getEvents(API);
  }, []);
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
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center my-8">
            Upcoming Events
          </h1>
          <div className="grid grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
