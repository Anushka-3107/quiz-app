import React from 'react';
import Timer from './Timer';
import Clock from '../Images/Clock.png';
import Questions from './Questions';

const QuizQuestion = () =>  {
  
  return (
    <div className='flex flex-col justify-center items-center bg-[#FFF8E3] '>
      <div style={{position:'relative'}}>
        <img src={Clock} alt='Clock' className= "w-32 h-32" />
        <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Timer />
        </div>
      </div>

      <Questions />
    </div>
  );
};

export default QuizQuestion;
