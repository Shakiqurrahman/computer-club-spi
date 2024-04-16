import React from "react";

const ResultModal = ({toggle}) => {
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
            <div className="p-4 md:p-5 space-y-4">
                <p>Status : Passed</p>
              <p className="text-base leading-relaxed text-blue-500  ">
                Result: 4.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
