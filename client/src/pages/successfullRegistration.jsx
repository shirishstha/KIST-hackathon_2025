import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Button } from '@/components/ui/button';
import React from 'react'
import { useNavigate } from 'react-router-dom'
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
            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                    <span className="dot bg-green-400" style={{ top: '10%', left: '15%', width: '5px', height: '5px' }}></span>
                    <span className="dot bg-green-500" style={{ top: '40%', left: '70%', width: '2px', height: '2px' }}></span>
                    <span className="dot bg-green-300" style={{ top: '5%', left: '30%', width: '3px', height: '3px' }}></span>
                    <span className="dot bg-green-600" style={{ top: '20%', left: '80%', width: '8px', height: '8px' }}></span>
                    <span className="dot bg-emerald-400" style={{ top: '50%', left: '40%', width: '2px', height: '2px' }}></span>
                    <span className="dot bg-green-500" style={{ top: '15%', left: '73%', width: '5px', height: '5px' }}></span>
                    <span className="dot bg-green-400" style={{ top: '20%', left: '23%', width: '2px', height: '2px' }}></span>
                    <span className="dot bg-teal-500" style={{ top: '15%', left: '11%', width: '6px', height: '6px' }}></span>
                    <span className="dot bg-green-400" style={{ top: '30%', left: '18%', width: '1px', height: '1px' }}></span>
                    <span className="dot bg-emerald-500" style={{ top: '25%', left: '13%', width: '4px', height: '4px' }}></span>
                    <span className="dot bg-green-400" style={{ top: '40%', left: '19%', width: '2px', height: '2px' }}></span>
                    <span className="dot bg-green-500" style={{ top: '45%', left: '85%', width: '4px', height: '4px' }}></span>
                </div>
            </div>
            <nav className='flex h-30'>
                <img src="/mainlogo.png" alt="" className=" m-5 h-18" />
            </nav>
            <div className='absolute flex justify-center flex-col items-center w-full space-y-2 h-[60%] p-4 lg:p-2'>

                <h1 className='text-3xl gradientEffect'>Registration Successfull</h1>
                <p className='text-sm text-gray-500' >Your response has been registered successfully. Thankyou for registering.</p>
                <Button onClick={() => navigate('/')}>Go Home</Button>
            </div>



        </div>
  );
}
