import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Code, MoveLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Codewar = () => {
    const navigate = useNavigate();
    return (
        <div>
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
                <Button variant="ghost" className="hover:bg-transparent hover:text-white text-gray-300 absolute right-2 top-10 lg:right-10" onClick={() => navigate('/registration')}><MoveLeft className='w-10 text-green-400' /> Back to events</Button>
            </nav>
            <div className=''>
                <div className='flex flex-col items-center space-y-5'>
                    <Code className='h-18 w-18 bg-green-500 p-4 rounded-full text-black' />
                    <h1 className=' text-3xl gradientEffect'>Code War</h1>
                    <p className='text-gray-300 font-medium'>Individual Programming Competetion</p>
                </div>
                <div className='flex justify-center space-x-20 space-y-5 flex-wrap '>
                    <div className='shadow-[0_0_5px]  p-5 max-w-150 px-10 space-y-5 rounded-lg m-5 '>
                        <h1 className='text-2xl font-medium gradientEffect'>Registration Form</h1>
                        <div className='grid gap-2'>
                            <Label>Full Name</Label>
                            <Input />
                        </div>
                        <div className='grid gap-2'>
                            <Label>Semester</Label>
                            <Input />
                        </div>
                        <div className='grid gap-2'>
                            <Label>Faculty</Label>
                            <Input />
                        </div>
                        <div className='grid gap-2'>
                            <Label>Email</Label>
                            <Input />
                        </div>
                        <div className='grid gap-2'>
                            <Label>Id no.</Label>
                            <Input />
                        </div>

                    </div>
                    <div>
                        <div className='max-w-[400px] p-5 w-140 shadow-[0_0_5px] m-5 rounded-lg space-y-2'>
                        <h1 className='text-2xl font-medium gradientEffect '>About Code War</h1>
                        <div className='grid gap-2 text-gray-400'>
                            <p>
                                Code War is an intense individual programming competition designed to test your coding skills,
                                problem-solving abilities, and algorithmic thinking under time pressure.
                            </p>
                            <p>
                                Participants will face a series of challenging programming problems that require efficient solutions
                                and optimal code implementation. The competition supports multiple programming languages including
                                C++, Java, Python, and JavaScript.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="text-center">
                                    <h4 className="text-green-400 font-semibold">Duration</h4>
                                    <p>3 Hours</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-green-400 font-semibold">Problems</h4>
                                    <p>8-10 Challenges</p>
                                </div>
                            </div>
                        </div>

                    </div>
                   <div className='max-w-[400px] p-5 w-140 shadow-[0_0_5px] m-5 rounded-lg space-y-2'>
                        <div>
                            <h1 className="text-2xl gradientEffect ">Rules & Regulations</h1>
                        </div>
                        <div className="text-gray-300">
                            <ul className="space-y-3 list-disc list-inside">
                                <li>Individual participation only - no team collaboration allowed</li>
                                <li>Use of internet for documentation is permitted</li>
                                <li>Ranking will be based on number of problems solved and time taken</li>
                                <li>In case of ties, the participant with faster submission time wins</li>
                                <li>Any form of cheating or plagiarism will result in immediate disqualification</li>
                                <li>Organizers' decision will be final in case of disputes</li>
                                <li>Participants must be present 30 minutes before the competition starts</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default Codewar