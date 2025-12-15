import { useState, useEffect, useRef } from "react"

export default function OtpGenerator() {
  const [otp, setOtp]=useState("");
  const [time, setTime]=useState(null);

  function generateOtp(){
    const randomOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(randomOtp);
    setTime(5);

  }

  useEffect(()=>{
    if(time === null) return;
    if(time === 0) return;

    const timer = setTimeout(()=>{
      setTime (prevTime=>prevTime - 1);

    }, 1000)

    return ()=>clearTimeout(timer)
  }, [time])


  return(
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {time === null && ""}
        {time >0 && `Expires in: ${time} seconds`}
        {time === 0 && "OTP expired. Click the button to generate a new OTP."}
      </p>

      <button 
        id="generate-otp-button"
        onClick={generateOtp}
        disabled={time > 0}
      >
      Generate OTP
      </button>
    </div>
  );

};
