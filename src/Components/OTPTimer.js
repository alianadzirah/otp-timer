import { useEffect, useState } from 'react';

const OTPTimer = () => {

const timeMin = 5;
const timeSec = 0;

  const [seconds,setSeconds] = useState(timeSec);
  const [minutes,setMinutes] = useState(timeMin);
  const [ex, setEx] = useState(true);
  const [disable, setDisable] = useState(false);

  var timer;
  useEffect(()=> {

    timer = setInterval(()=>{

      setSeconds(seconds-1);

      if(seconds===0) {
        if(minutes!==0 || seconds!==0){
          setMinutes(minutes-1);
          setSeconds(59);
          setEx(true);
        } else {
          setEx(false)
        }
      } 

    },1000)

    return ()=> clearInterval(timer);

  })

  useEffect(()=> {
    if (minutes<3) {
        setDisable(false);
    } else {
      setDisable(true);
    }

    if(minutes<=0 && seconds<=0){
      setEx(false);
    }
  }, [seconds])


  const start=()=>{
    setDisable(false);
    setSeconds(timeSec);
    setMinutes(timeMin);
    setEx(true);
  }

  const expiring = "Your OTP is expiring in " + String(minutes).padStart(2,0) + ":" + String(seconds).padStart(2,0);
  const expired = "Your OTP has expired";

  return (
      <div >
        
        <h3>{ex ? expiring : expired}</h3>
            
        <button onClick={start} disabled={disable}>Resend OTP</button>
      </div>
  )
}


export default OTPTimer
