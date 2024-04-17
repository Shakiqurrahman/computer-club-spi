import React, { useEffect, useState } from "react";

const ResultModal = ({ toggle, resultData, rollNumber }) => {
  const { passed, result } = resultData;

  const [numOfSubF, setNumOfSubF] = useState(0);

  useEffect(() => {
    if (!passed) {
      const length = result.length;
      setNumOfSubF(length);
    }
  }, [passed, result.length]);

  console.log(typeof result);
  try {
    if (typeof result === "object") {
      console.log("It's an object");
    } else if (Array.isArray(result)) {
      console.log("It's an array");
    } else {
      console.log("It's neither an object nor an array");
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className=" overflow-y-auto bg-[#33333356] overflow-x-hidden fixed z-50 flex justify-center items-center w-full inset-0 h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-gray-100 rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-center text-gray-900">
                Your BTEB Result
              </h3>
              <button
                onClick={toggle}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
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
            <div className="p-4 md:p-8">
              <h3 className="text-2xl font-semibold text-center mb-2">
                Roll : {rollNumber}
              </h3>
              <p className="text-center text-gray-600">
                Results Of Diploma In Engineering{" "}
              </p>
              <p className="text-center text-gray-600">
                Sylhet Polytechnic Institute, Sylhet
              </p>
              <div className=" bg-gray-200/70 rounded-xl mt-10 p-4">
                <div className="flex justify-between mb-8">
                  <p>Semester : 6th</p>
                  <p>
                    Status :{" "}
                    <span
                      className={`${
                        passed ? "text-[#05e476]" : "text-red-600"
                      }`}
                    >
                      {passed ? "Passed" : numOfSubF+' subject yet to pass'}
                    </span>
                  </p>
                </div>
                {
                  passed ? <h3 className="text-[35px] leading-relaxed text-center text-[#05e476]">
                  {result}
                </h3> : <h3 className="text-[30px] leading-relaxed text-center">
                  Failed In <span className="text-red-500">{result}</span>
                </h3>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
