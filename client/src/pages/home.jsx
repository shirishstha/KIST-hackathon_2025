import { Button } from '@/components/ui/button'
import { Calendar, Code, Palette, Settings } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <div className="min-h-screen w-full relative flex flex-col">
                {/* Background Dots */}
                <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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

                {/* Navigation */}
                <nav className="flex items-center justify-between px-6 py-4 z-10 relative">
                    <img src="/mainlogo.png" alt="logo" className="h-16" />
                    <Button onClick={()=> navigate('/login')}>Admin Login</Button>
                </nav>

                {/* Centered Content */}
                <div className="flex-1 flex flex-col justify-center items-center px-4 text-center space-y-6 z-10 relative">
                    <h2 className="text-gray-200 border border-green-500 rounded-2xl px-4 py-2 hover:text-green-500 hover:border-gray-300 flex items-center">
                        <Calendar className="text-green-600 mr-2" size={18} />
                        August 06-08, 2025
                    </h2>

                    <h1 className="text-4xl sm:text-5xl font-medium leading-snug">
                        <span>KIST</span>
                        <span className="font-bold bg-gradient-to-r from-lime-400 via-teal-500 to-green-600 bg-clip-text text-transparent block">HACKFEST</span>
                        <span className="block mt-1 text-2xl">2025</span>
                    </h1>

                    <h3 className="typing-text text-base sm:text-lg">
                        Elevate your <span className="gradientEffect">creativity</span> with <span className="gradientEffect">innovation.</span>
                    </h3>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 sm:gap-14 pt-8 font-bold">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl text-green-600">48</span>
                            <span className="text-sm">Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl text-teal-400">100+</span>
                            <span className="text-sm">Participants</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl gradientEffect">30+</span>
                            <span className="text-sm">Projects</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* "Are you ready?" Section */}
            <div className="min-h-screen px-4 py-16 flex flex-col justify-center items-center space-y-10">
                <div className="text-center space-y-4 max-w-xl">
                    <h1 className="text-4xl font-bold">Are you ready?</h1>
                    <p className="text-gray-400">
                        Join this intra college hackathon event to test your creative skills
                        that drive you towards your future innovation and objectives.
                    </p>
                    <Button onClick={() => navigate('/registration')}>Let's Go</Button>
                </div>

                {/* Event Descriptions */}
                <div className="flex flex-wrap justify-center gap-10 pt-10">
                    <div className="shadow-[0_0_30px] hover:shadow-green-600 rounded-lg p-6 max-w-xs space-y-2 cursor-pointer" onClick={()=> navigate('/codewar')}>
                        <Code className="bg-green-500 h-8 w-8 p-2 rounded-lg" />
                        <h2 className="text-xl font-bold">Code War</h2>
                        <p className="text-gray-400">
                            Face off against the best coders in a series of mind-bending programming challenges designed
                            to test your logic, problem-solving, and algorithmic skills. Whether you're a Python prodigy
                            or a JavaScript ninja, this is your arena to prove your mettle.
                        </p>
                    </div>

                    <div className="shadow-[0_0_30px] hover:shadow-teal-600 rounded-lg p-6 max-w-xs space-y-2 cursor-pointer" onClick={()=> navigate('/hackathon')}>
                        <Settings className="bg-teal-500 h-8 w-8 p-2 rounded-lg" />
                        <h2 className="text-xl font-bold">Hackathon</h2>
                        <p className="text-gray-400">
                            Collaborate. Innovate. Dominate. The hackathon is your
                            chance to turn ideas into reality, whether it's a web app, mobile tool,
                            or hardware integration. Solve real-world problems, pitch your solution, and make your mark.
                        </p>
                    </div>

                    <div className="shadow-[0_0_30px] hover:shadow-emerald-600 rounded-lg p-6 max-w-xs space-y-2 cursor-pointer" onClick={()=> navigate('/ui-ux')}>
                        <Palette className="bg-emerald-500 h-8 w-8 p-2 rounded-lg" />
                        <h2 className="text-xl font-bold">UI/UX</h2>
                        <p className="text-gray-400">
                            Unleash your artistic flair in our UI/UX showdown,
                            where imagination meets digital canvas. Craft visually stunning
                            designs that tell stories, spark emotions, and leave a lasting impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
