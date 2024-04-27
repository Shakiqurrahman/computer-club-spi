import React from "react";

const EventCard = ({ event }) => {
  return (
    <>
      {event && (
        <div className="rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full h-[300px]" src={event?.thumbnail} alt={event.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{event.event_name}</div>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Date: {event.date}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Time: {event.time}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
