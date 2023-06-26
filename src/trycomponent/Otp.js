import React, { useEffect, useState, Fragment } from 'react';
import './Otp.css';

const Otp = () => {

  const [countDown, setCountDown] = useState(0); 
  const [ex, setEx] = useState(true);
  const [disable, setDisable] = useState(false);
  const time = 5;

  var timer;
  useEffect(()=> {
    if (ex) { 
        setCountDown(60 * time);
        timer = setInterval(() => { 
          setCountDown((countDown) => countDown - 1);
        }, 1000);
      } else {
        clearInterval(timer); 
      }

    return ()=> clearInterval(timer);

  }, [ex]);

  useEffect(()=> {

    if(countDown < 1 && ex) {
      setEx(false);
      setCountDown(0);
    }

    if (countDown < 180) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [countDown, ex])

  const start=()=>{
    setCountDown(time * 60);
    setEx(true);
  }

  const seconds = String(countDown % 60).padStart(2, 0); //padStart is just to have it in 2 digits like 01,10,20
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0); 
  const expiring = <Fragment>Your OTP is expiring in <b>{minutes}:{seconds}</b></Fragment>;
  
  const expired = "Your OTP has expired.";

  return (
      <div >
        <div>
          <p>{ex ? expiring : expired}</p>
        </div>
        
            
        <button onClick={start} disabled={disable}>Resend OTP</button>
      </div>
  )
}


export default Otp
