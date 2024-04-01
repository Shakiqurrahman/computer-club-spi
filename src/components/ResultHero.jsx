import React from "react";
import resultImg from "../assets/result.svg";

const ResultHero = () => {
  return (
    <section className="flex flex-col md:flex-row  items-center gap-6 sm:gap-16">
      <div className="w-full">
        <img className="w-full sm:w-[80%]" src={resultImg} alt="Image" />
      </div>
      <div className="w-full">
        <h2 className="text-center text-3xl font-semibold text-secondary">Get Your Result</h2>
        <p className="text-center text-sm font-semibold mb-4">by just One Click!</p>

        <form className="max-w-md mx-auto bg-[#f6f5f1] p-8 rounded-2xl">
          <label htmlFor="exam" className="block mb-2 text-sm font-medium">
            Exam
          </label>
          <select
            id="exam"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Diploma Engineering</option>
          </select>
          <label htmlFor="exam" className="block my-2 text-sm font-medium">
            Regulation
          </label>
          <select
            id="exam"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Any</option>
            <option>2010</option>
            <option>2016</option>
            <option selected>2022</option>
          </select>
          <label htmlFor="exam" className="block my-2 text-sm font-medium">
            Roll Number*
          </label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" name="RollNo" id="RollNo" placeholder="600000"required/>
          <button
          type="submit"
          className="mt-6 py-3 px-4 w-full text-sm border border-transparent text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-blue-600 font-semibold  rounded-md duration-300 "
        >
          Send Message
        </button>
        </form>
      </div>
    </section>
  );
};

export default ResultHero;
