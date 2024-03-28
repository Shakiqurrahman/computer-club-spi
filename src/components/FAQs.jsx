import React, { useState } from "react";
import Accordion from "./Accordion";

const FAQs = () => {
  const [open, setOpen] = useState(0);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordionData = [
    {
      id: 1,
      question: "What is the SPI Computer Club?",
      answer:
        "The SPI Computer Club is a community of individuals within the SPI who share a passion for technology, computing, and related fields. It serves as a platform for members to come together, learn, collaborate, and engage in various activities related to computers and technology.",
    },
    {
      id: 2,
      question: "Who can join the SPI Computer Club?",
      answer:
        "Membership in the SPI Computer Club is typically open to students, faculty, and staff of the School of Professional Integration who are interested in computers and technology. Regardless of one's level of expertise or background, anyone with enthusiasm for technology is welcome to join.",
    },
    {
      id: 3,
      question: "What are the benefits of joining the SPI Computer Club?",
      answer:
        "Joining the SPI Computer Club offers numerous benefits, including opportunities for skill development, networking with peers and professionals in the field, access to resources and learning materials, participation in events and competitions, and the chance to contribute to exciting projects and initiatives within the SPI community.",
    },
  ];
  return (
    <section>
      <h1 className="text-center text-secondary text-2xl sm:text-4xl font-semibold mb-10">
        Freequently Asked Questions
      </h1>
      <div className="grid place-items-center">
        <div className=" bg-[#f4f5f8] rounded-xl p-6 sm:p-12">
          {accordionData.map((data, index) => {
            return (
              <Accordion
                key={data.id}
                open={index === open}
                question={data.question}
                answer={data.answer}
                toggle={() => toggle(index)}
              ></Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
