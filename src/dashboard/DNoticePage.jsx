import React, { useState } from "react";
import { Link } from "react-router-dom";
import DFooter from "../components/dashboard-comp/DFooter";
import Sidebar from "../components/dashboard-comp/Sidebar";

const DNoticePage = () => {
  const NoticeData = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "International Mother Language Day",
      date: "2024-05-01",
      time: "4:20p.m",
      status: "Upcoming",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Pohela Boishakh",
      date: "2024-05-10",
      time: "2:46p.m",
      status: "Finished",
    },
  ];

  const [notice, setNotice] = useState(NoticeData);
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <Sidebar />
      <div className="h-full w-full bg-white relative overflow-y-auto lg:ml-60 mt-6 sm:p-4">
        <div className="bg-white shadow rounded-lg p-4 xl:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">All Notice</h2>
            <Link to="/admin/dashboard/create-notice">
              <button className="bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm hover:bg-blue-600 duration-200">
                Add Notice
              </button>
            </Link>
          </div>
          <input
            type="text"
            placeholder="Search by notice's name"
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
                    Notice Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Notice Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Notice Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
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
                {notice?.map((notice) => (
                  <tr key={notice.id}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 w-32 sm:w-64">
                        {notice?.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {notice?.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {notice?.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {notice.status === "Finished" ||
                      notice.status === "finished" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 capitalize">
                          {notice?.status}
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 capitalize">
                          {notice?.status}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => onEdit(notice.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => onRemove(notice.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <DFooter />
      </div>
    </div>
  );
};

export default DNoticePage;
