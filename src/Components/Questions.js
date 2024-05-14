import React from "react";
import { useState } from "react";
import { data } from "../data";

const Questions = () => {
  const [index] = useState(0);
  const [question] = useState(data[index]);

  const checkAns = (e, ans) => {
    if (question.ans === ans) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("wrong");
    }
  };

  return (
    <div className="m-6 flex flex-col">
      <div className="bg-[#BEEBE9] px-36 py-20 rounded-3xl border-r-4 border-[#9BE3DE] border-b-4 ">
        <h2 className="text-xl text-black font-bold">
          {index + 1}.{question.question}
        </h2>
      </div>

      <div className="mt-7">
        <ul>
          <li
            className="bg-white my-3 px-2 py-4 border-r-4 border-b-4 border-[#BEEBE9] rounded-xl"
            onClick={(e) => {
              checkAns(e, 1);
            }}
          >
            {question.option1}
          </li>
          <li
            className="bg-white my-3 px-2 py-4 border-r-4 border-b-4 border-[#BEEBE9] rounded-xl"
            onClick={(e) => {
              checkAns(e, 2);
            }}
          >
            {question.option2}
          </li>
          <li
            className="bg-white my-3 px-2 py-4 border-r-4 border-b-4 border-[#BEEBE9] rounded-xl"
            onClick={(e) => {
              checkAns(e, 3);
            }}
          >
            {question.option3}
          </li>
          <li
            className="bg-white my-3 px-2 py-4 border-r-4 border-b-4 border-[#BEEBE9] rounded-xl"
            onClick={(e) => {
              checkAns(e, 4);
            }}
          >
            {question.option4}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Questions;
