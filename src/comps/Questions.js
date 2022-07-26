import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const questions = [
  {
    id: 1,
    question: "Is there a fee to use WedMatch?",
    active: true,
    description:
      "Nope! WedMatch is 100% free for couples to use. We make money by charging the wedding photographers a small referral fee when a couple books a photographer they found on WedMatch.",
  },
  {
    id: 2,
    question: "What type of photographers can I find on WedMatch?",
    active: false,
    description:
      "Nope! WedMatch is 100% free for couples to use. We make money by charging the wedding photographers a small referral fee when a couple books a photographer they found on WedMatch.",
  },
  {
    id: 3,
    question: "How are wedding photographers vetted?",
    active: false,
    description:
      "Nope! WedMatch is 100% free for couples to use. We make money by charging the wedding photographers a small referral fee when a couple books a photographer they found on WedMatch.",
  },
  {
    id: 4,
    question:
      "I’m looking for an elopement photographer. Can I still use WedMatch?",
    active: false,
    description:
      "Nope! WedMatch is 100% free for couples to use. We make money by charging the wedding photographers a small referral fee when a couple books a photographer they found on WedMatch.",
  },
  {
    id: 5,
    question: "How long does it take to find your photographer matches?",
    active: false,
    description:
      "Nope! WedMatch is 100% free for couples to use. We make money by charging the wedding photographers a small referral fee when a couple books a photographer they found on WedMatch.",
  },
];

const Questions = () => {
  const [question, setQuestion] = useState(questions);

  const handleQuery = (id) => {
    setQuestion(
      question.map((i) =>
        i.id === id ? { ...i, active: !i.active } : { ...i, active: false }
      )
    );
  };

  return (
    <div className="h-auto py-10">
      <div className="main-container">
        <div className="w-full">
          <h1 className="text-3xl font-secondary-font text-secondary text-center">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-col w-full mt-[20px]">
            {question.map((q) => (
              <div>
                <div
                  className={`px-5 py-5 border-solid font-extrabold cursor-pointer border-2 mb-3 relative  ${
                    q.active
                      ? "bg-primary border-primary text-white"
                      : "bg-transparent border-gray-200"
                  }`}
                  key={q.id}
                  onClick={() => handleQuery(q.id)}
                >
                  {q.question}{" "}
                  <span
                    className={`absolute right-5 ${
                      q.active ? "text-white" : ""
                    }`}
                  >
                    {q.active ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
                <div
                  className={`${
                    q.active ? "max-h-[500px]" : "max-h-0"
                  }  border-solid  transition-all duration-300 ease-in-out mb-3 overflow-hidden  `}
                >
                  <p className="text-sm py-2 px-5">{q.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
