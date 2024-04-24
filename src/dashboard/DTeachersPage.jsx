import React, { useState } from "react";
import { Link } from "react-router-dom";
import DFooter from "../components/dashboard-comp/DFooter";
import Sidebar from "../components/dashboard-comp/Sidebar";

const DTeachersPage = () => {
  const teachersData = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      profession: "Mathematics Teacher",
      number: "+1234567890",
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      profession: "Science Teacher",
      number: "+9876543210",
    },
  ];

  const [teachers, setTeachers] = useState(teachersData);
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <Sidebar />
      <div className="h-full w-full bg-white relative overflow-y-auto lg:ml-60 mt-6 sm:p-4">
        <div className="bg-white shadow rounded-lg p-4 xl:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">All Teachers</h2>
            <Link to="/admin/dashboard/create-teacher">
              <button className="bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm hover:bg-blue-600 duration-200">
                Create Teacher
              </button>
            </Link>
          </div>
          <input
          type="text"
          placeholder="Search by teacher's name"
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
                    Avatar
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Teacher's Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Profession
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Number
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
                {teachers?.map((teacher) => (
                  <tr key={teacher.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={teacher.avatar}
                            alt="Teacher Avatar"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {teacher.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {teacher.profession}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {teacher.number}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => onEdit(teacher.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => onRemove(teacher.id)}
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

export default DTeachersPage;
