import { Link } from "react-router-dom";
import DFooter from "../components/dashboard-comp/DFooter";
import Sidebar from "../components/dashboard-comp/Sidebar";
import { useGetData } from "../utility/fetchData/getData";

import axios from "axios";
import toast from "react-hot-toast";
const DEventPage = () => {
  const { datas, loading } = useGetData("event");
  console.log(datas);
  const onRemove = async (id) => {
    toast.loading("loading...");

    const fetch = await axios.delete(
      `https://computer-club-spi.onrender.com/api/event/delete/${id}`
    );
    const data = await fetch.data;
    toast.success(data.message);
    console.log(data.message);
    window.location.reload();
  };
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <Sidebar />
      <div className="h-full w-full bg-white relative overflow-y-auto lg:ml-60 mt-6 sm:p-4">
        <div className="bg-white shadow rounded-lg p-4 xl:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">All Events</h2>
            <Link to="/admin/dashboard/create-event">
              <button className="bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm hover:bg-blue-600 duration-200">
                Add Event
              </button>
            </Link>
          </div>
          <input
            type="text"
            placeholder="Search by event's name"
            className="py-2 px-4 text-sm outline-none border border-gray-300 rounded-md w-full mb-2"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Event Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Event Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Event Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Event Time
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {datas &&
                  datas.data?.map((event) => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 ">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={event?.thumbnail}
                              alt="Event Image"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {event?.event_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {event?.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {event?.time}
                        </div>
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap">
                        {event.status === "Finished" ||
                        event.status === "finished" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 capitalize">
                            {event?.status}
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 capitalize">
                            {event?.status}
                          </span>
                        )}
                      </td> */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          className="text-indigo-600 hover:text-indigo-900"
                          to={`/admin/dashboard/event/edit/${event._id}`}
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          className="text-red-600 hover:text-red-900"
                          onClick={() => onRemove(event._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                {loading && <p>loading....</p>}
              </tbody>
            </table>
          </div>
        </div>
        <DFooter />
      </div>
    </div>
  );
};

export default DEventPage;
