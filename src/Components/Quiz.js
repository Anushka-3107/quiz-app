import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Quiz = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/QuizQuestion");
    console.log("clicked");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f1e6da]">
      <div className="flex flex-col justify-center items-center space-y-10 rounded-lg bg-[#f5d5de] p-60 ">
        <h1 className="text-6xl font-extrabold text-red-500"> Quiz </h1>
        <button
          onClick={handleClick}
          className="flex justify-center items-center px-6 py-3 rounded-full bg- text-black"
        >
          Start Your Quiz Here  
          <FaArrowRightLong 
            className="ml-2"
          />
         
        </button>
      </div>
    </div>
  );
};

export default Quiz;
