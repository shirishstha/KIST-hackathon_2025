"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, MoveLeft, Palette } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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

const GraphicDesigning = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [semester, setSemester] = useState("")
  const [faculty, setFaculty] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")
  const [contact, setContact] = useState("")
  const [loading, setLoading] = useState("")

  const handleCheck = async () => {
    setLoading(true)
    //validations
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

    const res = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/graphicdesigning`, {
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
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm z-[1000] flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <span className="dot bg-blue-400" style={{ top: "10%", left: "15%", width: "5px", height: "5px" }}></span>
          <span className="dot bg-blue-500" style={{ top: "40%", left: "70%", width: "2px", height: "2px" }}></span>
          <span className="dot bg-blue-300" style={{ top: "5%", left: "30%", width: "3px", height: "3px" }}></span>
          <span className="dot bg-blue-600" style={{ top: "20%", left: "80%", width: "6px", height: "6px" }}></span>
          <span className="dot bg-orange-400" style={{ top: "50%", left: "40%", width: "2px", height: "2px" }}></span>
          <span className="dot bg-blue-500" style={{ top: "15%", left: "33%", width: "5px", height: "5px" }}></span>
          <span className="dot bg-blue-400" style={{ top: "20%", left: "23%", width: "2px", height: "2px" }}></span>
          <span className="dot bg-orange-500" style={{ top: "15%", left: "11%", width: "3px", height: "3px" }}></span>
          <span className="dot bg-blue-400" style={{ top: "30%", left: "18%", width: "1px", height: "1px" }}></span>
          <span className="dot bg-orange-500" style={{ top: "25%", left: "13%", width: "4px", height: "4px" }}></span>
          <span className="dot bg-blue-400" style={{ top: "40%", left: "19%", width: "2px", height: "2px" }}></span>
          <span className="dot bg-blue-500" style={{ top: "45%", left: "85%", width: "4px", height: "4px" }}></span>
        </div>
      </div>
      <nav className="flex h-30">
        <img src="/mainlogo.png" alt="" className=" m-5 h-18" />
        <Button
          variant="ghost"
          className="hover:bg-transparent absolute right-2 top-10 lg:right-10"
          onClick={() => navigate("/registration")}
        >
          <MoveLeft className="w-10 text-orange-500" /> Back to events
        </Button>
      </nav>
      <div className="">
        <div className="flex flex-col items-center space-y-5">
          <Palette className="h-18 w-18 bg-orange-500 p-4 rounded-full text-gray-100" />
          <h1 className=" text-3xl gradientEffect">UI/UX</h1>
          <p className="text-gray-500 font-medium">Design the Unspoken. Speak Through Visuals.</p>
        </div>

        <div className="flex justify-center space-x-20 space-y-5 flex-wrap w-full ">
          {/* forms starts from here */}
          <div className="m-0">
            <div className="myShadow  p-5 w-80 md:100 lg:w-120 px-10 space-y-5 rounded-lg m-5 ">
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
                          {" "}
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
                      <DropdownMenuRadioItem value="BIM">BIM</DropdownMenuRadioItem>
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
                          {" "}
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
                <p>
                  Enter valid contact and confirm the submission as all the information is circulate through contact
                  only. One email is only liable for one registration. Choose your semester and faculty wisely .Lastly
                  id no is the id provided by the college.
                </p>
              </div>
            </div>

            <div className=" p-5 w-80 md:w-100 lg:w-120 myShadow m-5 rounded-lg space-y-2">
              <h1 className="text-2xl font-medium gradientEffect ">About UI/UX</h1>
              <div className="grid gap-2 text-gray-500">
                <p>
                  It is the art of visually communicating ideas that words alone can't express. It blends creativity,
                  color, layout, and typography to tell stories, evoke emotions, and deliver messages clearly and
                  beautifully. From branding to social media, a well-crafted design leaves a lasting impact.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <h4 className="text-indigo-600 font-semibold">Duration</h4>
                    <p>3 Hours</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-orange-500 font-semibold">Participant</h4>
                    <p>Individual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[400px] p-5 w-80 md:w-100 lg:w-140 myShadow m-5 rounded-lg space-y-2">
            <div>
              <h1 className="text-2xl gradientEffect ">Rules & Regulations</h1>
            </div>
            <div className="text-gray-500">
              <ol class="list-decimal pl-5 space-y-1">
                <li>
                  <strong>Venue:</strong> Bachelor's computer lab
                </li>
                <li>
                  <strong>Date & Time:</strong> 22nd Shrawan at 10 AM
                </li>
                <li>
                  <strong>Platform:</strong> Figma
                </li>
                <li>
                  <strong>Eligibility:</strong> Class 12 to Bachelor's students (only if form is submitted)
                </li>
                <li>Participants can use their own Figma account</li>
                <li>Individual competition</li>
                <li>
                  <strong>Total Time:</strong> 6 hours
                </li>
                <li>
                  <strong>Theme:</strong> Will be released on the spot during the competition
                </li>
                <li>Breaks allowed during the competition only if required</li>
                <li>Participants must arrive at least 10 minutes before the competition</li>
                <li>
                  <strong>NO PLAGIARISM</strong>
                </li>
                <li>Multiple accounts are not allowed</li>
                <li>Participants will use the computers provided in the lab</li>
                <li>If any technical issues occur, the lost time will be compensated</li>
                <li>
                  <strong>Disqualification Criteria:</strong>
                  <ul class="list-disc pl-5 mt-1">
                    <li>Plagiarism detection</li>
                    <li>AI-generated templates and external help</li>
                    <li>Submitting someone else's work</li>
                    <li>Leaving the competition without submitting any design</li>
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

export default GraphicDesigning
