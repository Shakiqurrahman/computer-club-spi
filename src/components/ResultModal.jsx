/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosCheckmarkCircle, IoIosWarning } from "react-icons/io";

const ResultModal = ({ rollNumber, resultData, toggle, setResultData }) => {
  // const { passed, result, semester } = resultData;
  
  let failSubjects;
  if (!resultData?.passed) {
    failSubjects = resultData?.result.map((item) => item.replace("(T)", ""));
  }

  const [numOfSubF, setNumOfSubF] = useState(0);

  useEffect(() => {
    if (!resultData?.passed) {
      const length = resultData?.result.length;
      setNumOfSubF(length);
    }
  }, [resultData?.passed, resultData?.result.length]);

  try {
    if (typeof resultData?.result === "object") {
      console.log("It's an object");
    } else if (Array.isArray(resultData?.result)) {
      console.log("It's an array");
    } else {
      console.log("It's neither an object nor an array");
    }
  } catch (error) {
    console.log(error);
  }

  let semesterSuffix;
  switch (resultData?.semester) {
    case 1:
      semesterSuffix = "st";
      break;
    case 2:
      semesterSuffix = "nd";
      break;
    case 3:
      semesterSuffix = "rd";
      break;
    default:
      semesterSuffix = "th";
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("modal-backdrop")) {
        toggle();
        setResultData(null);
      }
    };

    if (toggle) {
      document.body.addEventListener("click", handleOutsideClick);
      document.body.classList.add('modal-open');
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
      document.body.classList.remove('modal-open');
    };
  }, [toggle]);

  const handleToggle = async () => {
    toggle();
    setResultData(null);
  };

  return (
    <div className="py-20">
      <div className="modal-backdrop bg-[#33333389] fixed z-50 flex justify-center items-center w-full inset-0 h-full">
        <div className="relative p-4 w-full max-w-2xl">
        <div className="relative bg-[#f3f4f6] rounded-2xl shadow-xl max-h-[65vh] sm:max-h-[75vh]  overflow-y-scroll modal-scroll">
            <div className="absolute top-0 right-0 p-3">
              <button
                onClick={handleToggle}
                type="button"
                className="text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="size-[15px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-8 pt-10 md:pt-10">
              <div className="border-b border-gray-800 pb-4 border-dashed">
                <h3 className="text-2xl font-semibold text-center mb-0.5">
                  Roll : {rollNumber}
                </h3>
                <p className="text-center text-gray-600">
                  Results Of Diploma In Engineering{" "}
                </p>
                <p className="text-center text-gray-600">
                  Sylhet Polytechnic Institute, Sylhet
                </p>
              </div>

              {resultData ? (
                <div>
                  {resultData?.passed === false && (
                    <p className="mt-4 p-2 text-center text-lg bg-[#ef4444]/20 text-[#8d1919] font-semibold border-b-2 border-[#8d1919]">
                      {numOfSubF + " Subjects Yet to Pass"}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-center text-xl pt-2">loading....</p>
              )}
              <div className=" bg-gray-200/70 rounded-xl mt-8 p-4">
                <div className="flex justify-between mb-8">
                  {resultData ? (
                    <div>
                      {resultData?.passed ? (
                        <div className="flex items-center gap-1 text-[#22c55e]">
                          <IoIosCheckmarkCircle size={18} />
                          <p className="text-[12px] sm:text-base">Passed</p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-[#ef4444]">
                          <IoIosWarning size={18} />
                          <p className="text-[12px] sm:text-base">
                            Referred : {numOfSubF}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p>loading....</p>
                  )}
                  {
                    resultData ? <p className="font-semibold text-[12px] sm:text-base">
                    {resultData?.semester}
                    {semesterSuffix} Semester
                  </p> :
                  <p className="font-semibold text-[12px] sm:text-base">
                  Loading...
                </p>
                  }
                  {resultData ? <div className="flex items-center gap-1">
                    <FaRegCalendarAlt size={14} />
                    <p className="text-[12px] sm:text-sm">03 March, 2024</p>
                  </div> : <p>Loading...</p>
                  }
                </div>

                {resultData ? (
                  <div>
                    {resultData?.passed ? (
                      <h3 className="text-xl font-semibold text-center text-[#0000ff] bg-[#dcfce7] p-2 rounded-lg border-2 border-[#05e476]">
                        CGPA : {resultData?.result}{" "}
                        <span className="text-sm text-[#1e90ff]">
                          (Out of 4)
                        </span>
                      </h3>
                    ) : (
                      <>
                        {failSubjects?.map((s, i) => (
                          <h3
                            key={i}
                            className="text-xl font-semibold text-center text-[#ef4444] bg-[#ef4444]/20 p-2 rounded-md border border-[#05e476] border-collapse mb-1"
                          >
                            {s}
                          </h3>
                        ))}
                      </>
                    )}
                  </div>
                ) : (
                  <p className=" text-center p-2 border-2 border-black/10 rounded-md">
                    loading....
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
