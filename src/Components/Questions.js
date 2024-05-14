import React from "react";
import { useState } from "react";
import { data } from "../data";
import { BsStars } from "react-icons/bs";
import { WiStars } from "react-icons/wi";


const Questions = () => {
  const [index,setIndex] = useState(0);
  const[selectedOption,setSelectedOption] = useState(null);
  const question = data[index];

  const checkAnswer = () => {
    if(selectedOption === null){
      alert("Please select an option");
      return;
    }
    if(selectedOption === question.answer){
      alert("Correct answer");
    }
    else{
      alert("Wrong answer");
    }
  };

  const nextQuestion = () =>{
    setIndex(index+1);
    setSelectedOption(null);
  }

  return (
    <div className="m-6 flex flex-col">
      <div className="bg-[#BEEBE9] relative px-36 py-20 rounded-3xl border-r-4 border-[#9BE3DE] border-b-4 ">
        <h2 className="text-xl text-black font-bold">
          {index + 1}.{question?.ques}
        </h2>
       
        <BsStars className= "absolute text-3xl text-white right-4 top-7" />
        <WiStars className="absolute text-4xl text-white bottom-6 right-3"/>
      </div>

      <div className="mt-7">
        <ul>
        {question?.options.map((option,idx)=>{
          return(
          <li key={idx}
          className="bg-white my-3 px-2 py-4 border-r-4 border-b-4 border-[#BEEBE9] rounded-xl"
          onClick={()=> setSelectedOption(idx+1)} 
          >
            {option}
          </li>
          )
        })}
        </ul>
      </div>
      <button onClick={checkAnswer}>Check Answer</button>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default Questions;
