import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ open, question, answer, toggle }) => {
  return (
    <div>
      <div
        className=" py-[15px] gap-4  flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[16px] sm:text-xl font-semibold">{question}</p>
        <div className="text-xl sm:text-[25px]">
          {open ? <AiOutlineMinus/> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className=" text-justify w-[90%] text-[13px] sm:text-[16px] leading-relaxed text-gray-700">{answer}</div>
      </Collapse>
    </div>
  );
};

export default Accordion;
