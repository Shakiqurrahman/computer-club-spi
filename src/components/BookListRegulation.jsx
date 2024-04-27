import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscActivateBreakpoints } from "react-icons/vsc";



const BookListRegulation = ({data,regulation}) => {
    const navigate = useNavigate();
  const filteredPrograms = data?.programs?.filter(program => program.regulation === regulation);
  return (
    <div className="mt-4">
      {filteredPrograms.map((program, i) => (
        <div key={i}>
          <h3 onClick={() => navigate(`/Others/booklists/${program?.slug}`)} className="flex items-center gap-2 text-lg text-blue-600 mb-2 cursor-pointer hover:text-secondary duration-200"><VscActivateBreakpoints/>{program?.course}</h3>
          {/* {program.semesters.map((semester) => (
            <div key={semester.semester}>
              <h3 className="my-2 ml-5 text-xl text-secondary">{semester.semester}</h3>
              <ul className="ml-10 list-disc">
                {semester.courses.map(course => (
                  <li key={course.Code || course.code}>
                    {course.Name || course.name} - {course.Code || course.code}
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      ))}
    </div>
  );
};

export default BookListRegulation;
