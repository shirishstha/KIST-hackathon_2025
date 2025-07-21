import { Button } from '@/components/ui/button'
import { Calendar, Code, Palette, Settings } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="bg-black  mb-0">
            <div className='min-h-screen'>
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
                <div className=" h-screen w-full ">
                    <nav className='flex h-30'>
                        <img src="/mainlogo.png" alt="" className=" m-5 h-18" />
                        <div className='absolute right-8 top-5'>
                             <Button>Admin Login</Button>
                        </div>      
                    </nav>
                    <div className='flex  flex-col items-center space-y-30 sm:space-y-4 md:space-y-3 lg:space-y-4'>
                        <h2 className='text-gray-200 p-2 border border-green-500 flex rounded-2xl hover:text-green-500 hover:border-gray-300'><Calendar className='text-green-600 mt-0.5 p-0.5 mr-2' size={18} />July 21-23,2025</h2>
                        <h1 className='text-5xl font-medium mt-5 '><span className='flex flex-col text-center'>KIST</span> <span className='font-bold bg-gradient-to-r from-lime-400 via-teal-500 to-green-600 bg-clip-text text-transparent'>HACKFEST</span> <span className='flex flex-col items-center mt-5 text-2xl'>2025</span></h1>
                        <h3 className='typing-text'>Elevate your <span className='gradientEffect'>creativity</span> with <span className='gradientEffect'>innovation.</span></h3>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex w-full absolute bottom-20 justify-center space-x-5 md:space-x-20 lg:space-x-40 font-bold text-center">

                            <div className="flex flex-col items-center">
                                <span className="text-4xl text-green-600">48</span>
                                <span className="text-sm">Hours</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="text-4xl text-teal-400">70+</span>
                                <span className="text-sm">Participants</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="text-4xl gradientEffect">30+</span>
                                <span className="text-sm">Projects</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='p-5 '>
                <div className='w-full flex items-center flex-col space-y-2 my-10'>
                    <h1 className='text-4xl font-bold'>Are you ready?</h1>
                    <p className='text-gray-400 text-wrap max-w-[500px] text-center'>
                        Join this intra college hackathon event to test you creative skills
                        that drives you towards your future innovation and objectives. 
                    </p>
                    <div>
                        <Button className="w-34"  onClick={()=> navigate('/registration')}>Let's Go</Button>
                    </div>
                    <div className='flex justify-between w-full p-5 pt-20 md:p-10 lg:p-20 flex-wrap space-y-8'>
                        <div className='shadow-[0_0_30px] hover:shadow-green-600 rounded-lg p-5 space-y-1  '>
                            <Code className=' bg-green-500 h-8 rounded-lg w-8 p-2'/>
                            <h1 className='text-xl font-bold'>Code War</h1>
                            <p className='text-gray-400 max-w-80'>
                                Face off against the best coders in a series of mind-bending programming challenges designed
                                to test your logic, problem-solving, and algorithmic skills. Whether you're a Python prodigy
                                or a JavaScript ninja, this is your arena to prove your mettle.</p>
                        </div>
                        <div className='shadow-[0_0_30px] hover:shadow-teal-600 rounded-lg p-5 space-y-1'>
                            <Settings className=' bg-teal-500 h-8 rounded-lg w-8 p-2'/>
                            <h1 className='text-xl font-bold'>Hackathon</h1>
                            <p className='text-gray-400 max-w-80'>
                                Collaborate. Innovate. Dominate. The hackathon is your 
                                chance to turn ideas into reality, whether it's a web app, mobile tool,
                                or hardware integration. Solve real-world problems, pitch your solution, and make your mark.</p>
                        </div>
                        <div className='shadow-[0_0_30px] hover:shadow-emerald-600 rounded-lg p-5 space-y-1 mb-[32px]'>
                            <Palette className=' bg-emerald-500 h-8 rounded-lg w-8 p-2'/>
                            <h1 className='text-xl font-bold'>UI/UX</h1>
                            <p className='text-gray-400 max-w-80'>
                                Unleash your artistic flair in our UI/UX showdown,
                                where imagination meets digital canvas. Craft visually stunning
                                designs that tell stories, spark emotions, and leave a lasting impact.</p>
                        </div>
                             
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default HomePage