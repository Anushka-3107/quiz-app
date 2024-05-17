import React from "react";
import { useLocation } from "react-router-dom";

const Score = () => {
  const location = useLocation();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8E3]">
      <div className="bg-[#BEEBE9] p-20 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Quiz Score</h1>
        <h2 className="text-5xl font-extrabold mt-6 ">Congratulations🎉</h2>
        <p className="text-xl mt-5">You scored {score} / {totalQuestions}</p>
      </div>
    </div>
  );
};

export default Score;
