import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "../assets/calculating.svg";

function CgpaCalc() {
  const [grades, setGrades] = useState({
    first: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
  });

  const [totalCGPA, setTotalCGPA] = useState("");
  const [regulation, setRegulation] = useState('2022');

  const handleRegulation = (e) => {
    const {value} = e.target;
    console.log("Selected Regulation:", value);
    setRegulation(value);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const pattern = /^[0-4]?(\.[0-9]{0,2})?$/;
    // Check if the input value matches the pattern
    if ((value <= 4 && pattern.test(value)) || value === "") {
      setGrades({ ...grades, [name]: value });
    }
  };

  const calculateCGPA = () => {
    let weightage = {};
    switch (regulation) {
      case '2010':
        weightage = {
          semester1: 5,
          semester2: 5,
          semester3: 5,
          semester4: 15,
          semester5: 15,
          semester6: 20,
          semester7: 25,
          semester8: 10,
        };
        break;
      case '2016':
        weightage = {
          semester1: 5,
          semester2: 5,
          semester3: 5,
          semester4: 10,
          semester5: 15,
          semester6: 20,
          semester7: 25,
          semester8: 15,
        };
        break;
      case '2022':
      default:
        weightage = {
          semester1: 5,
          semester2: 5,
          semester3: 10,
          semester4: 10,
          semester5: 20,
          semester6: 20,
          semester7: 20,
          semester8: 10,
        };
        break;
    }

    let totalCGPA = 0;
    for (const semester in grades) {
      const gpa = parseFloat(grades[semester]);
      if (!isNaN(gpa)) {
        const semesterWeightage = weightage[semester];
        totalCGPA += (gpa / 100) * semesterWeightage;
      }
    }
    setTotalCGPA(totalCGPA.toFixed(2));
  };

  const resetGrades = () => {
    setGrades({
      first: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      semester1: "",
      semester2: "",
      semester3: "",
      semester4: "",
      semester5: "",
      semester6: "",
      semester7: "",
      semester8: "",
    });
    setTotalCGPA("");
  };

  return (
    <section className="mb-28">
      <div className="hidden sm:block mb-6">
        <h1 className="text-center font-semibold text-3xl mb-1 text-secondary">
          CGPA Calculator
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
          <span className="text-[#2030e0]">CGPA Calculator</span>
        </h3>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full">
          <img className="w-4/5" src={img} alt="Image Of Calculating Result" />
        </div>
        <div className="w-full">
          <div className="mb-4">
            <label htmlFor="exam" className="block my-2 text-sm font-medium outline-none focus:outline-none">
              Regulation
            </label>
            <select
            onChange={handleRegulation}
              id="exam"
              name="regulation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
            >
              <option>2010</option>
              <option>2016</option>
              <option selected>2022</option>
            </select>
          </div>
          <div className=" grid grid-cols-2 gap-4 mb-5">
            {Array.from({ length: 8 }, (_, index) => index + 1).map(
              (semester) => (
                <input
                  key={semester}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                  type="number"
                  name={`semester${semester}`}
                  value={grades[`semester${semester}`]}
                  onChange={handleInputChange}
                  pattern="[0-4]{1}(?:\.[0-9]{1,2})?"
                  placeholder={`GPA for Semester ${semester}`}
                />
              )
            )}
          </div>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
              onClick={calculateCGPA}
            >
              Calculate CGPA
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white border border-[#ff9999] rounded-lg"
              onClick={resetGrades}
            >
              Clear
            </button>
          </div>
          {totalCGPA > 0 && (
            <h1 className="text-center font-bold text-2xl mt-4">
              TOTAL CGPA = {totalCGPA}
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default CgpaCalc;
