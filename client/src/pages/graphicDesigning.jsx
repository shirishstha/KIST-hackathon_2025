import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronDown, MoveLeft, Palette } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import toast from 'react-hot-toast'
import axios from 'axios'

const GraphicDesigning = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [semester, setSemester] = useState('');
    const [faculty, setFaculty] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');


    const handleCheck = async () => {
        //validations
        if (!name || !semester || !faculty || !email || !id) {
            return toast.error("All fields must be filled");
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(email)) {
            return toast.error("Invalid email format.");
        }
        const idRegex = /^[0-9]{4,}$/
        if (!idRegex.test(id)) {
            return toast.error("Invalid id.")
        }

        const res = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/graphicdesigning`, { name, semester, faculty, email, id });

        if (!res.data.success) {
            toast.error(res.data.message);
            return;
        }
        toast.success(res.data.message);
    }
    return (
        <div>
            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                    <span className="dot bg-green-400" style={{ top: '10%', left: '15%', width: '5px', height: '5px' }}></span>
                    <span className="dot bg-green-500" style={{ top: '40%', left: '70%', width: '2px', height: '2px' }}></span>
                    <span className="dot bg-green-300" style={{ top: '5%', left: '30%', width: '3px', height: '3px' }}></span>
                    <span className="dot bg-green-600" style={{ top: '20%', left: '80%', width: '6px', height: '6px' }}></span>
                    <span className="dot bg-emerald-400" style={{ top: '50%', left: '40%', width: '2px', height: '2px' }}></span>
                    <span className="dot bg-green-500" style={{ top: '15%', left: '33%', width: '5px', height: '5px' }}></span>
                    <span className="dot bg-green-400" style={{ top: '20%', left: '23%', width: '2px', height: '2px' }}></span>
                    <span className="dot bg-teal-500" style={{ top: '15%', left: '11%', width: '3px', height: '3px' }}></span>
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
                    <Palette className='h-18 w-18 bg-emerald-500 p-4 rounded-full text-gray-100' />
                    <h1 className=' text-3xl gradientEffect'>UI/UX</h1>
                    <p className='text-gray-300 font-medium'>Design the Unspoken. Speak Through Visuals.</p>
                </div>



                <div className='flex justify-center space-x-20 space-y-5 flex-wrap '>
                    {/* forms starts from here */}
                    <div className='shadow-[0_0_5px]  p-5 w-120 px-10 space-y-5 rounded-lg m-5 '>
                        <h1 className='text-2xl font-medium gradientEffect'>Registration Form</h1>
                        <div className='grid gap-2'>
                            <Label>Full Name</Label>
                            <Input
                                placeholder="Enter your name here"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                required
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label>Email</Label>
                            <Input
                                placeholder="Email here"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                required
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label>Id no.</Label>
                            <Input
                                placeholder="eg:6060"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                type="text"
                                required
                            />
                        </div>

                        <div className='grid gap-2'>
                            <Label>Faculty</Label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="relative">
                                        {faculty && faculty ?
                                            <div className='absolute left-3'>{faculty}</div> :
                                            (
                                                <h1 className='flex'> Choose your Faculty <ChevronDown className='mt-1' /></h1>
                                            )}
                                    </Button>

                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 bg-black border border-gray-300">
                                    <DropdownMenuRadioGroup value={faculty} onValueChange={setFaculty} className="bg-black hover:bg-black  text-gray-300">
                                        <DropdownMenuRadioItem value="BIM">BIM</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="BIT">BIT</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="BBA">BBA</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="BSC">BSC</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="+2">+2</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className='grid gap-2'>
                            <Label>Semester</Label>
                            <p className='text-xs text-gray-400'>*Choose not applicable option for +2</p>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="relative">
                                        {semester && semester ?
                                            <div className='absolute left-3'>{semester}</div> :
                                            (
                                                <h1 className='flex'> Select Semester <ChevronDown /></h1>
                                            )}
                                    </Button>

                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 bg-black border border-gray-300">
                                    <DropdownMenuRadioGroup value={semester} onValueChange={setSemester} className="bg-black hover:bg-black  text-gray-300">
                                        <DropdownMenuRadioItem value="First">First</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Second">Second</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Third">Third</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Fourth">Fourth</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Fifth">Fifth</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Sixth">Sixth</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Seventh">Seventh</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Eighth">Eighth</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Not Applicable">Not Applicable</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>



                        <Button onClick={() => handleCheck()} >Check Details</Button>

                        {/* notes */}
                        <div className='mt-8 text-gray-400'>
                            <h1 className='text-lg'>Note:</h1>
                            <p>Enter valid email address and confirm the submission as all the information is circulate through emails only.And one email is only liable for one registration. Choose your semester and faculty wisely .Lastly id no is the id provided by the college.</p>
                        </div>

                    </div>
                    <div>
                        <div className='max-w-[400px] p-5 w-80 md:w-100 lg:w-140 shadow-[0_0_5px] m-5 rounded-lg space-y-2'>
                            <h1 className='text-2xl font-medium gradientEffect '>About UI/UX</h1>
                            <div className='grid gap-2 text-gray-400'>
                                <p>
                                    It is the art of visually communicating ideas that words alone can't express.
                                    It blends creativity, color, layout, and typography to tell stories, evoke emotions, and
                                    deliver messages clearly and beautifully. From branding to social media, a well-crafted design
                                    leaves a lasting impact.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="text-center">
                                        <h4 className="text-green-400 font-semibold">Duration</h4>
                                        <p>3 Hours</p>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-green-400 font-semibold">Participant</h4>
                                        <p>Individual</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='max-w-[400px] p-5 w-80 md:w-100 lg:w-140 shadow-[0_0_5px] m-5 rounded-lg space-y-2'>
                            <div>
                                <h1 className="text-2xl gradientEffect ">Rules & Regulations</h1>
                            </div>
                            <div className="text-gray-400">
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

export default GraphicDesigning