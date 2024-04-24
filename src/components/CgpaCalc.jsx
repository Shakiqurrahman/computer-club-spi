import axios from "axios";
import React, { useEffect, useState } from "react";
import img from "../assets/calculating.svg";

function CgpaCalc() {
  const [totalCGPA, setTotalCGPA] = useState("");
  const [regulation, setRegulation] = useState("2022");
  const [rollNumber, setRollNumber] = useState("");
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

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
  const handleRegulation = (e) => {
    const { value } = e.target;
    console.log("Selected Regulation:", value);
    setRegulation(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const pattern = /^[0-4]?(\.[0-9]{0,2})?$/;
    // Check if the input value matches the pattern
    if ((value <= 4 && pattern.test(value)) || value === "") {
      setGrades({ ...grades, [name]: value });
    }
  };

  const calculateCGPA = () => {
    setError('');
    let weightage = {};
    switch (regulation) {
      case "2010":
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
      case "2016":
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
      case "2022":
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
    setError('');
  };

  const GetResult = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (rollNumber.length !== 6) {
      setError("Roll Must be 6 Digits Long!");
      setLoading(false);
    } else {
      try {
        const { data } = await axios(
          `https://computer-club-spi.onrender.com/api/result/${rollNumber}`
        );
        setResultData(data);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setError("Result Not Found!");
        setLoading(false);
      }
    }
  };

  // automatically load result into corresponding semester input field
  useEffect(() => {
    if (resultData) {
      const semesterNumber = resultData.semester;
      const result = resultData.result;
      if (semesterNumber >= 1 && semesterNumber <= 8) {
        setGrades({ ...grades, [`semester${semesterNumber}`]: result });
      }
    }
  }, [resultData]);

  return (
    <section className="mb-28">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-0">
        <div className="w-full">
          <img
            className="w-4/5 mx-auto md:mx-0"
            src={img}
            alt="Image Of Calculating Result"
          />
        </div>
        <div className="w-full">
          <div className=" max-w-[520px] mx-auto px-4 sm:px-8 py-6 sm:py-8 rounded-[30px] bg-slate-200/30 shadow border">
            <h2 className="text-center text-3xl font-semibold text-secondary mb-4">CGPA Calculator</h2>
            <div className="mb-3">
              <label
                htmlFor="exam"
                className="block my-2 text-sm font-medium outline-none focus:outline-none"
              >
                Regulation
              </label>
              <select
                onChange={handleRegulation}
                id="exam"
                name="regulation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4 outline-none"
              >
                <option>2010</option>
                <option>2016</option>
                <option selected>2022</option>
              </select>
            </div>
            <form
              className="flex justify-between gap-10"
              onSubmit={GetResult}
            >
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 px-4 outline-none"
                type="number"
                onChange={(e) => setRollNumber(e.target.value)}
                name="RollNo"
                id="RollNo"
                placeholder='Roll Number'
              />
              <button
                type="submit"
                className={`py-2.5 w-1/3 px-4 text-sm text-white bg-blue-500   font-semibold  rounded-md duration-200 ${
                  rollNumber ? "hover:bg-blue-600" : "cursor-not-allowed opacity-70"
                }`}
                disabled={!rollNumber}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mx-auto border-white border-t-2 border-b-2 rounded-full "
                    viewBox="0 0 24 24"
                  ></svg>
                ) : (
                  "Fill Result"
                )}
              </button>
            </form>
            <div className=" grid grid-cols-2 gap-3 my-3">
              {Array.from({ length: 8 }, (_, index) => index + 1).map(
                (semester) => (
                  <input
                    key={semester}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4 outline-none"
                    type="number"
                    name={`semester${semester}`}
                    value={grades[`semester${semester}`]}
                    onChange={handleInputChange}
                    pattern="[0-4]{1}(?:\.[0-9]{1,2})?"
                    placeholder={`Semester ${semester}`}
                  />
                )
              )}
            </div>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-green-600 hover:bg-green-700 duration-200 text-white rounded-lg"
                onClick={calculateCGPA}
              >
                Calculate CGPA
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white border border-[#ff9999] rounded-lg hover:bg-red-700 duration-200"
                onClick={resetGrades}
              >
                Clear
              </button>
            </div>
            {totalCGPA > 0 && (
              <h1 className="text-center font-semibold text-green-500 text-2xl mt-4">
                <span className="font-medium text-black">CGPA :</span> {totalCGPA}
              </h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CgpaCalc;
