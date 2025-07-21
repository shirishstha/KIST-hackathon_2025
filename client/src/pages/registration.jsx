import { Button } from '@/components/ui/button'
import { Code, MoveLeft, Palette, Settings } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className='flex h-30'>
                <img src="/mainlogo.png" alt="" className=" m-5 h-18" />
                <Button variant="ghost" className="hover:bg-transparent hover:text-white text-gray-300 absolute right-2 lg:right-10 top-10" onClick={()=>navigate('/')}><MoveLeft className='w-10 text-green-400'/> Go back</Button>

            </nav>
            <div className='w-full items-center flex flex-col'>
                <h1 className='text-3xl gradientEffect'>Select Competiton</h1>
                <p className='text-sm text-gray-400 text-center'>Choose your desired competion according to your interest and profeciency.</p>

            </div>
            <div className='flex justify-between w-full py-25 px-5 lg:p-20 flex-wrap space-y-8 '>
                <div className='shadow-[0_0_3px] hover:shadow-[0_0_30px] hover:shadow-green-600 group hover:scale-105 transition-all ease-in-out duration-300 rounded-lg p-5 space-y-3 flex flex-col items-center w-full lg:w-90'>
                    <Code className=' bg-green-600 h-12 rounded-lg w-12 p-2' />
                    <h1 className='text-xl font-bold text-gray-300 group-hover:text-gray-200'>Code War</h1>
                    <p className='text-gray-400 text-center pb-5 group-hover:text-gray-300'> Individual coding competition to test your programming skills</p>
                    <div className="space-y-2 mb-6  text-gray-400">
                        <p>• Individual Competition</p>
                        <p>• 3 Hours Duration</p>
                        <p>• Multiple Programming Languages</p>
                        <p>• Real-time Leaderboard</p>
                    </div>
                    <Button className="shadow-none hover:scale-105 ease-in-out duration-200" onClick={()=> navigate('/codewar')}>Register for Codewar</Button>
                </div>
                <div className='shadow-[0_0_3px] hover:shadow-[0_0_30px] hover:shadow-teal-600 group hover:scale-105 transition-all ease-in-out duration-300 rounded-lg p-5 space-y-3 flex flex-col items-center w-full lg:w-90'>
                    <Settings className=' bg-teal-600 h-12 rounded-lg w-12 p-2' />
                    <h1 className='text-xl font-bold text-gray-300 group-hover:text-gray-200'>Hackathon</h1>
                    <p className='text-gray-400 text-center pb-5 group-hover:text-gray-300'> 48-hour team challenge to build innovative solutions</p>
                    <div className="space-y-2 mb-6  text-gray-400">
                        <p>• Team Competition (3-5 members)</p>
                        <p>• 48 Hours Duration</p>
                        <p>• Innovation & Creativity</p>
                        <p>• Mentorship Available</p>
                    </div>
                    <Button className="shadow-none hover:scale-105 ease-in-out duration-200" onClick={()=> navigate('/hackathon')}>Register for Hackathon</Button>
                </div>
                <div className='shadow-[0_0_3px] hover:shadow-[0_0_30px] hover:shadow-emerald-600 group hover:scale-105 transition-all ease-in-out duration-300 rounded-lg p-5 space-y-3 mb-[32px] flex flex-col items-center w-full lg:w-90'>
                    <Palette className=' bg-emerald-600 h-12 rounded-lg w-12 p-2' />
                    <h1 className='text-xl font-bold text-gray-300 group-hover:text-gray-200'>UI/UX</h1>
                    <p className='text-gray-400 text-center pb-10 group-hover:text-gray-300 '> Showcase your creativity and design skills</p>
                    <div className="space-y-2 mb-6  text-gray-400">
                        <p>• Individual Competition</p>
                        <p>• 4 Hours Duration</p>
                        <p>• Creative Freedom</p>
                        <p>• Professional Judging</p>
                    </div>
                     <Button className="shadow-none hover:scale-105 ease-in-out duration-200" onClick={()=> navigate('/graphic-designing')}>Register for UI/UX</Button>
                </div>
            </div>
        </div>

    )
}

export default Registration