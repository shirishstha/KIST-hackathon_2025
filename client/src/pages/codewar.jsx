"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, Code, MoveLeft } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import toast from "react-hot-toast"
import axios from "axios"
import { Spinner } from "@/components/ui/spinner"
import { Helmet } from "react-helmet"

const Codewar = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [semester, setSemester] = useState("")
  const [faculty, setFaculty] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")
  const [contact, setContact] = useState("")
  const [loading, setLoading] = useState(false)

  const handleCheck = async () => {
    setLoading(true)
    //validation logics
    if (!name || !semester || !faculty || !email || !id) {
      toast.error("All fields must be filled")
      return setLoading(false)
    }
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.")
      return setLoading(false)
    }
    const idRegex = /^[0-9]{4}$/
    if (!idRegex.test(id)) {
      toast.error("Invalid id.")
      return setLoading(false)
    }
    const contactRegex = /^(98|97|96)\d{8}$/
    if (!contactRegex.test(contact)) {
      toast.error("Invalid contact.")
      return setLoading(false)
    }

    //call backend api
    const res = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/codewar`, {
      name,
      semester,
      faculty,
      email,
      id,
      contact,
    })
    setLoading(false)

    if (!res.data.success) {
      toast.error(res.data.message)
      return
    }
    toast.success(res.data.message)
    navigate("/successfull_registration")
  }
  return (
    <div>
      <Helmet>
        <title>KIST Hackfest | Codewar</title>
      </Helmet>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm z-[1000] flex items-center justify-center">
          <Spinner />
        </div>
      )}

   
      <nav className="flex h-30">
        <Link to="/"> <img src="/logo.png" alt="" className=" m-5 h-20" /></Link>
       
        <Button
          variant="ghost"
          className="hover:bg-transparent  absolute right-2 top-10 lg:right-10"
          onClick={() => navigate("/registration")}
        >
          <MoveLeft className="w-10 text-orange-500" /> Back to events
        </Button>
      </nav>
      <div className="">
        <div className="flex flex-col items-center space-y-5">
          <Code className="h-18 w-18 bg-blue-800/85 p-4 rounded-full text-gray-100" />
          <h1 className=" text-3xl gradientEffect">Code War</h1>
          <p className="text-gray-500 font-medium">Individual Programming Competetion</p>
        </div>

        <div className="flex justify-center space-x-5 space-y-5 flex-wrap w-full">
          {/* forms starts from here */}

          <div className="m-0 ">
            <div className="myShadow  p-5 w-80 md:w-100 lg:w-120 px-10 space-y-5 rounded-lg m-5 ">
              <h1 className="text-2xl font-medium gradientEffect">Registration Form</h1>
              <div className="grid gap-2">
                <Label>Full Name</Label>
                <Input
                  placeholder="Jhon Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input
                  placeholder="jhondoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Contact</Label>
                <Input
                  placeholder="98********"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Id no.</Label>
                <Input placeholder="eg:6060" value={id} onChange={(e) => setId(e.target.value)} type="text" required />
              </div>

              <div className="grid gap-2">
                <Label>Faculty</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="relative bg-transparent">
                      {faculty && faculty ? (
                        <div className="absolute left-3 font-normal">{faculty}</div>
                      ) : (
                        <h1 className="flex text-muted-foreground">
                          Choose your Faculty <ChevronDown className="mt-1" />
                        </h1>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuRadioGroup
                      value={faculty}
                      onValueChange={setFaculty}
                    >
                      <DropdownMenuRadioItem value="BITM">BITM</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="BIT">BIT</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="BBA">BBA</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="BSC">BSC</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="+2">+2</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid gap-2">
                <Label>Semester</Label>
                <p className="text-xs text-gray-500">*Choose not applicable option for +2</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="relative bg-transparent">
                      {semester && semester ? (
                        <div className="absolute left-3 font-normal">{semester}</div>
                      ) : (
                        <h1 className="flex text-muted-foreground">
                          Select Semester <ChevronDown />
                        </h1>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuRadioGroup
                      value={semester}
                      onValueChange={setSemester}
                    >
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

              <Button onClick={() => handleCheck()}>Submit</Button>

              {/* notes */}
              <div className="mt-8 text-gray-500">
                <h1 className="text-lg">Note:</h1>
                <p className="text-justify">
                  Enter valid contact and confirm the submission as all the information is circulated through contact
                  only. One email is only liable for one registration. Choose your semester and faculty wisely . Lastly
                  id no is the id provided by the college.
                </p>
              </div>
            </div>
            <div className="w-80 p-7  md:w-100 lg:w-120 myShadow m-5 rounded-lg space-y-2">
              <h1 className="text-2xl font-medium gradientEffect ">About Code War</h1>
              <div className="grid gap-2 text-gray-500">
                <p className="text-justify">
                  Code War is an intense individual programming competition designed to test your coding skills,
                  problem-solving abilities, and algorithmic thinking under time pressure.
                </p>
                <p className="text-justify">
                  Participants will face a series of challenging programming problems that require efficient solutions
                  and optimal code implementation. The competition supports multiple programming languages including
                  C++, Java, Python, and JavaScript.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 text-muted-foreground">
                  <div className="text-center">
                    <h4 className="text-blue-800/85 font-semibold">Duration</h4>
                    <p>2 Hours</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-orange-400 font-semibold">Problems</h4>
                    <p>7 Challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[400px] p-7 w-80 md:w-100 lg:w-140 myShadow m-5 rounded-lg space-y-2">
            <div>
              <h1 className="text-2xl gradientEffect ">Rules & Regulations</h1>
            </div>
            <div className="text-gray-500">
              <ol className="list-decimal pl-5 space-y-1 text-base leading-relaxed text-justify">
                <li>
                  <strong>Venue:</strong> Bachelor's computer lab
                </li>
                <li>
                  <strong>Date & Time:</strong> 14th August at 9 A.M
                </li>
                <li>
                  <strong>Orientation Date:</strong> 10th August at 11 A.M
                </li>
                <li>
                  <strong>Form Submission Deadline:</strong> 7th August 2025
                </li>
                <li>
                  <strong>Platform:</strong> HackerRank
                </li>
                <li>Participants can use their own HackerRank account</li>
                <li>
                  <strong>Total Time:</strong> 120 minutes, divided into eight 15-minute sessions
                </li>
                <li>Problems will be released in stages (one every 15 minutes)</li>
                <li>
                  <strong>Total Questions:</strong> 7 questions of varying difficulty
                </li>
                <li>The last 15 minutes can be used freely by participants to review, debug, or submit solutions</li>
                <li>
                  No breaks allowed during the competition. Once left, the participant cannot reenter the room except
                  for emergency cases. They may only leave after submitting at least 1 answer.
                </li>
                <li>If no answers are submitted, the participant will be disqualified</li>
                <li>Participants must arrive at least 10 minutes before the competition</li>
                <li>Most programming languages supported by HackerRank are allowed</li>
                <li>Partial scores may be awarded for partially correct solutions</li>
                <li>Automatic scoring is handled by HackerRank based on test cases</li>
                <li>In case of a tie, time taken to solve problems will be considered</li>
                <li>
                  <strong>NO PLAGIARISM</strong>
                </li>
                <li>Multiple accounts are not allowed</li>
                <li>Participants will use the computers provided in the lab</li>
                <li>If any technical issues occur, the lost time will be compensated</li>
                <li>
                  <strong>Disqualification Criteria:</strong>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Plagiarism detection</li>
                    <li>AI-generated code, external help, or discussing solutions</li>
                    <li>Submitting someone else's work</li>
                    <li>Leaving the competition without submitting any solutions</li>
                    <li>Disrupting the competition in any way</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Codewar
