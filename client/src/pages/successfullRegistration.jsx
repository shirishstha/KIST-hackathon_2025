import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Button } from '@/components/ui/button';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from "react-helmet";

export default function SuccessfullRegistration() {
  useEffect(() => {
    // Fire confetti once on page load
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#00C851", "#ffbb33", "#33b5e5", "#ff4444"],
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className=" mb-0 min-h-screen">
      <Helmet>
        <title>KIST Hackfest | Registration Success</title>
      </Helmet>
      <nav className='flex h-30'>
          <Link to="/"> <img src="/logo.png" alt="" className=" m-5 h-20" /></Link>
      </nav>
      <div className='absolute flex justify-center flex-col items-center w-full space-y-2 h-[60%] p-4 lg:p-2'>

        <h1 className='text-3xl gradientEffect'>Registration Successfull</h1>
        <p className='text-sm text-gray-500 text-center' >Your response has been registered successfully. Thankyou for registering.</p>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>



    </div>
  );
}
