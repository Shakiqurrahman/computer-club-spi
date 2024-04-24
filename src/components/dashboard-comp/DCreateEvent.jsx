import  { useState } from "react";
import Sidebar from "../../components/dashboard-comp/Sidebar";
import DFooter from "../../components/dashboard-comp/DFooter";

const DCreateEvent = () => {
    const [details, setDetails] = useState([{ id: 1, value: '' }]);

    const handleAddDetail = () => {
      const newId = details[details.length - 1].id + 1;
      setDetails([...details, { id: newId, value: '' }]);
    };
  
    const handleChange = (id, e) => {
      const updatedDetails = details.map(detail =>
        detail.id === id ? { ...detail, value: e.target.value } : detail
      );
      setDetails(updatedDetails);
    };

  const handleEventForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <Sidebar />
      <div className="h-full w-full bg-white relative overflow-y-auto lg:ml-60 mt-6 sm:p-4">
        <div className="bg-blue-100 rounded-xl p-4 xl:p-6 max-w-[800px] mx-auto">
          <h1 className="text-3xl text-center font-semibold mb-6 text-secondary">
            Create an Event!!
          </h1>
          <form onSubmit={handleEventForm}>
            <div className="flex flex-col gap-2">
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Event Name"
                required
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Event Date"
                required
              />
              <input
                className="focus:outline-none p-3 rounded-md"
                type="text"
                placeholder="Event Time"
              />
              <input
                className="bg-white focus:outline-none p-3 rounded-md"
                type="file"
              />
              <div
        className="px-4 py-2 bg-blue-500/50 text-black rounded-lg inline w-44 font-semibold text-sm cursor-pointer"
        onClick={handleAddDetail}
      >
        Add Another Detail
      </div>
      {details.map(detail => (
        <textarea
          key={detail.id}
          className="focus:outline-none p-3 rounded-md resize-none"
          name={`detail-${detail.id}`}
          id={`detail-${detail.id}`}
          cols="20"
          rows="8"
          value={detail.value}
          placeholder="Event Detail"
          onChange={e => handleChange(detail.id, e)}
        ></textarea>
      ))}
      <button className="px-4 py-3 bg-secondary text-white rounded-lg hover:bg-white hover:text-secondary duration-300 font-semibold" type="submit">Create Event</button>
            </div>
          </form>
        </div>
      <DFooter />
      </div>
    </div>
  );
};

export default DCreateEvent;