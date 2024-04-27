import React, { useState } from "react";
import { useParams } from "react-router-dom";
import booklistData from "../utility/booklist.json";

const SingleBookList = () => {
  const { id } = useParams();
  const [data, setData] = useState(booklistData);
  const detail = data.programs.find((booklist) => booklist.slug === id);
  console.log("details", detail);

  return (
    <div className="mb-28">
      {detail ? (
        <>
          <h2 className="text-2xl font-semibold text-center text-black">
            {detail.course}
          </h2>
          <p className="text-center mb-8">{detail.description}</p>
          <div className="grid lg:grid-cols-2 gap-10">
            {detail.semesters.map((semester, i) => (
              <div
                key={i}
                className="bg-white drop-shadow border border-gray-400 rounded-2xl py-3"
              >
                <h3 className="text-center text-xl font-semibold text-secondary">
                  {semester.semester}
                </h3>
                <table className="min-w-full divide-y divide-gray-400 mt-3">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-base font-medium text-white bg-blue-600 uppercase tracking-wider">
                        Code
                      </th>
                      <th className="px-6 py-3 text-left text-base font-medium text-white bg-blue-600 uppercase tracking-wider">
                        Name
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {semester.courses.map((course, i) => (
                      <tr key={i} className="ml-4">
                        <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">
                          {course.Code || course.code}
                        </td>
                        <td className="px-6 py-4  text-base text-gray-900">
                          {course.Name || course.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default SingleBookList;
