import React, { useEffect, useState } from 'react';
import './timer.css';

const Timer = () => {

  const [seconds,setSeconds] = useState(0);
  const [minutes,setMinutes] = useState(5);

  var timer;
  useEffect(()=> {

    timer = setInterval(()=>{

      setSeconds(seconds-1);

      if(seconds===0) {
        setMinutes(minutes-1);
        setSeconds(59);
      }

    },1000)

    return ()=> clearInterval(timer);

  })


  const start=()=>{

    setSeconds(0);
    setMinutes(5);

  }

  const resend=()=>{

    clearInterval(timer);

  }

  return (
      <div className='timer'>
      <div className='container'>
      <div className='timer_container'>
        
        <h3>Your OTP is expiring in {minutes<10? "0"+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h3>

        <button className='resend' onClick={start}>Send OTP</button>
      </div>
      </div>
      </div>
  )
}


export default Timer
