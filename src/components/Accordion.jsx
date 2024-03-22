import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ open, question, answer, toggle }) => {
  return (
    <div className="pt-[10px]">
      <div
        className="bg-white py-[15px] md:px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-lg sm:text-xl font-semibold">{question}</p>
        <div className="text-[25px]">
          {open ? <AiOutlineMinus/> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="md:px-[50px] text-justify w-[90%] text-sm sm:text-[16px] leading-relaxed text-gray-700">{answer}</div>
      </Collapse>
    </div>
  );
};

export default Accordion;
