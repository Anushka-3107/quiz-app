import React, {useState,useEffect} from 'react'

const Timer = ({initialMinute = 2, initialSeconds = 0}) => {
  const[minutes, setMinutes] = useState(initialMinute);
  const[seconds, setSeconds] = useState(initialSeconds);
  
  useEffect(() => {
    let myInterval = setInterval(()=>{
      if(seconds > 0){
        setSeconds(seconds-1);
      }
      if(seconds === 0){
        if(minutes === 0){
          clearInterval(myInterval);
        }
        else{
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    },1000);
  
    return ()=> {
      clearInterval(myInterval);
    };

  },[minutes,seconds]);
  
  return (
    <div>
      <h1 className='text-lg font-bold text-yellow-300'>
        {minutes < 10 ? `0${minutes}` : minutes} : 
        {seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  )
}

export default Timer