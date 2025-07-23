"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, MoveLeft, Settings } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import toast from "react-hot-toast"
import axios from "axios"
import { Spinner } from "@/components/ui/spinner"

const Hackathon = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [team, setTeam] = useState({
    name: "",
    email: "",
    faculty: "",
    contact: "",
  })

  const [members, setMembers] = useState({
    member1: { name: "", email: "", id: "", semester: "", faculty: "" },
    member2: { name: "", email: "", id: "", semester: "", faculty: "" },
    member3: { name: "", email: "", id: "", semester: "", faculty: "" },
    member4: { name: "", email: "", id: "", semester: "", faculty: "" },
  })

  const handleMemberChange = (key, field, value) => {
    setMembers((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }))
  }

  const handleTeamChange = (field, value) => {
    setTeam((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const validateMembers = () => {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const idRegex = /^[0-9]{4}$/
    const values = Object.values(members)
    let fullyValidCount = 0
    const errors = []

    for (let i = 0; i < values.length; i++) {
      const { name, email, id, semester, faculty } = values[i]
      const filledFields = [name, email, id, semester, faculty].filter(Boolean).length

      //all field empty case
      if (filledFields === 0) continue //skips the optional members

      //partially filled case
      if (filledFields < 5) {
        errors.push(`Member ${i + 1} has incomplete fields`)
        continue
      }

      //if all fields are filled check for validations
      if (!emailRegex.test(email)) {
        errors.push(`Member ${i + 1} consist invalid email`)
      }
      if (!idRegex.test(id)) {
        errors.push(`Member ${i + 1} has invalid id`)
        continue
      }

      fullyValidCount++
    }

    if (fullyValidCount < 2) {
      errors.push("At least two members must be fully filled.")
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  const validateTeam = () => {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const contactRegex = /^(98|97|96)\d{8}$/

    if (!team.email || !team.name || !team.faculty || !team.contact) {
      toast.error("All fields of team must be filled properly.")
      return false
    }
    if (!emailRegex.test(team.email)) {
      toast.error("Email format of team is invalid")
      return false
    }
    if (!contactRegex.test(team.contact)) {
      toast.error("Phone no format of team is invalid")
      return false
    }

    return true
  }

  const handleCheck = async () => {
    setLoading(true)
    //team validation
    const validTeam = validateTeam()
    if (!validTeam) {
      return setLoading(false)
    }
    //members validation
    const { isValid, errors } = validateMembers()
    if (!isValid) {
      errors.forEach((error) => {
        toast.error(error)
      })
      return setLoading(false)
    }

    //filtering empty members
    const memberArray = Object.values(members)
    const cleanedMembers = memberArray.filter((member) => member.email && member.email.trim() !== "")

    //after successfull validation sending data to backend

    const res = await axios.post(`${import.meta.env.VITE_BACKENDAPI}/hackathon`, { team, members: cleanedMembers })
    setLoading(false)

    if (!res.data.success) {
      return toast.error(res.data.message)
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
          className="hover:bg-transparent  absolute right-2 top-10 lg:right-10"
          onClick={() => navigate("/registration")}
        >
          <MoveLeft className="w-10 text-blue-400" /> Back to events
        </Button>
      </nav>
      <div className="">
        <div className="flex flex-col items-center space-y-5">
          <Settings className="h-18 w-18 bg-orange-500 p-4 rounded-full text-gray-100" />
          <h1 className=" text-3xl gradientEffect">Hackathon</h1>
          <p className="text-gray-500 font-medium">Code. Create. Conquer.</p>
        </div>

        <div className="flex justify-center space-x-10 space-y-5 flex-wrap ">
          {/* forms starts from here */}
          <div className="m-0">
            <div className="myShadow p-5 lg:p-10 w-80 md:w-100 lg:w-120 px-5 space-y-5 rounded-lg m-5 ">
              <h1 className="text-2xl font-medium gradientEffect text-center">Registration Form</h1>
              <Tabs defaultValue="team" className="space-y-2 w-full">
                <TabsList className="bg-gradient-to-r from-orange-500 via-indigo-500 to-orange-500 selected:bg-red-800 w-full ">
                  <TabsTrigger
                    value="team"
                    className="data-[state=active]:bg-white data-[state=active]:text-black "
                  >
                    Team
                  </TabsTrigger>
                  <TabsTrigger
                    value="member1"
                    className="data-[state=active]:bg-white data-[state=active]:text-black"
                  >
                    {" "}
                    1
                  </TabsTrigger>
                  <TabsTrigger
                    value="member2"
                    className="data-[state=active]:bg-white data-[state=active]:text-black"
                  >
                    {" "}
                    2
                  </TabsTrigger>
                  <TabsTrigger
                    value="member3"
                    className="data-[state=active]:bg-white data-[state=active]:text-black"
                  >
                    {" "}
                    3
                  </TabsTrigger>
                  <TabsTrigger
                    value="member4"
                    className="data-[state=active]:bg-white data-[state=active]:text-black"
                  >
                    {" "}
                    4
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="team" className="flex flex-col space-y-4  ">
                  <div className="grid gap-2">
                    <Label>Team Name</Label>
                    <Input
                      placeholder="Enter your team name here"
                      value={team.name}
                      onChange={(e) => handleTeamChange("name", e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label> Email</Label>
                    <Input
                      placeholder=" Email here"
                      value={team.email}
                      onChange={(e) => handleTeamChange("email", e.target.value)}
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Contact no.</Label>
                    <Input
                      placeholder="Contact no here"
                      value={team.contact}
                      onChange={(e) => handleTeamChange("contact", e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Faculty</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="relative bg-transparent">
                          {team.faculty && team.faculty ? (
                            <div className="absolute left-3 font-normal">{team.faculty}</div>
                          ) : (
                            <h1 className="flex text-muted-foreground">
                              Choose your team's faculty <ChevronDown className="mt-1" />
                            </h1>
                          )}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 ">
                        <DropdownMenuRadioGroup
                          value={team.faculty}
                          onValueChange={(value) => handleTeamChange("faculty", value)}
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
                </TabsContent>

                <TabsContent value="member1" className="flex flex-col space-y-4">
                  <div className="grid gap-2">
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Member1"
                      value={members.member1.name}
                      onChange={(e) => handleMemberChange("member1", "name", e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      placeholder="member1@gmail.com"
                      value={members.member1.email}
                      onChange={(e) => handleMemberChange("member1", "email", e.target.value)}
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Id no.</Label>
                    <Input
                      placeholder="eg:6060"
                      value={members.member1.id}
                      onChange={(e) => handleMemberChange("member1", "id", e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Faculty</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="relative bg-transparent">
                          {members.member1.faculty && members.member1.faculty ? (
                            <div className="absolute left-3 font-normal">{members.member1.faculty}</div>
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
                          value={members.member1.faculty}
                          onValueChange={(value) => handleMemberChange("member1", "faculty", value)}
                          
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
                          {members.member1.semester && members.member1.semester ? (
                            <div className="absolute left-3 font-normal">{members.member1.semester}</div>
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
                          value={members.member1.semester}
                          onValueChange={(value) => handleMemberChange("member1", "semester", value)}
                          
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
                </TabsContent>

                <TabsContent value="member2" className="flex flex-col space-y-4">
                  <div className="grid gap-2">
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Member2"
                      value={members.member2.name}
                      onChange={(e) => handleMemberChange("member2", "name", e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      placeholder="member2@gmail.com"
                      value={members.member2.email}
                      onChange={(e) => handleMemberChange("member2", "email", e.target.value)}
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Id no.</Label>
                    <Input
                      placeholder="eg:6060"
                      value={members.member2.id}
                      onChange={(e) => handleMemberChange("member2", "id", e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Faculty</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="relative bg-transparent">
                          {members.member2.faculty && members.member2.faculty ? (
                            <div className="absolute left-3 font-normal">{members.member2.faculty}</div>
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
                          value={members.member2.faculty}
                          onValueChange={(value) => handleMemberChange("member2", "faculty", value)}
                          
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
                          {members.member2.semester && members.member2.semester ? (
                            <div className="absolute left-3 font-normal">{members.member2.semester}</div>
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
                          value={members.member2.semester}
                          onValueChange={(value) => handleMemberChange("member2", "semester", value)}
                          
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
                </TabsContent>

                <TabsContent value="member3" className="flex flex-col space-y-4">
                  <div className="grid gap-2">
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Member3"
                      value={members.member3.name}
                      onChange={(e) => handleMemberChange("member3", "name", e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      placeholder="member3@gmail.com"
                      value={members.member3.email}
                      onChange={(e) => handleMemberChange("member3", "email", e.target.value)}
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Id no.</Label>
                    <Input
                      placeholder="eg:6060"
                      value={members.member3.id}
                      onChange={(e) => handleMemberChange("member3", "id", e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Faculty</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="relative bg-transparent">
                          {members.member3.faculty && members.member3.faculty ? (
                            <div className="absolute left-3 font-normal">{members.member3.faculty}</div>
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
                          value={members.member3.faculty}
                          onValueChange={(value) => handleMemberChange("member3", "faculty", value)}
                          
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
                          {members.member3.semester && members.member3.semester ? (
                            <div className="absolute left-3 font-normal">{members.member3.semester}</div>
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
                          value={members.member3.semester}
                          onValueChange={(value) => handleMemberChange("member3", "semester", value)}
                          
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
                </TabsContent>

                <TabsContent value="member4" className="flex flex-col space-y-4">
                  <div className="grid gap-2">
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Member4"
                      value={members.member4.name}
                      onChange={(e) => handleMemberChange("member4", "name", e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      placeholder="member4@gmail.com"
                      value={members.member4.email}
                      onChange={(e) => handleMemberChange("member4", "email", e.target.value)}
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Id no.</Label>
                    <Input
                      placeholder="eg:6060"
                      value={members.member4.id}
                      onChange={(e) => handleMemberChange("member4", "id", e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Faculty</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="relative bg-transparent">
                          {members.member4.faculty && members.member4.faculty ? (
                            <div className="absolute left-3 font-normal">{members.member4.faculty}</div>
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
                          value={members.member4.faculty}
                          onValueChange={(value) => handleMemberChange("member4", "faculty", value)}
                          
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
                          {members.member4.semester && members.member4.semester ? (
                            <div className="absolute left-3 font-normal">{members.member4.semester}</div>
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
                          value={members.member4.semester}
                          onValueChange={(value) => handleMemberChange("member4", "semester", value)}
                          
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
                </TabsContent>
              </Tabs>
              <Button onClick={() => handleCheck()}>Submit</Button>

              {/* notes */}
              <div className="mt-8 text-gray-500">
                <h1 className="text-lg ">Things to remember:</h1>
                <p>
                  Fill all the details of your team and members then only submit the registration. Also minimum of 2
                  members is required for registration.
                </p>
                <h1 className="text-lg pt-3">Note:</h1>
                <p>
                  Enter valid contact and confirm the submission as all the information is circulate through contact
                  only. One email is only liable for one registration. Choose your semester and faculty wisely .Lastly
                  id no is the id provided by the college.
                </p>
              </div>
            </div>

            <div className=" p-5 w-80 md:w-100 lg:w-120 myShadow m-5 rounded-lg space-y-2">
              <h1 className="text-2xl font-medium gradientEffect ">About Hackathon</h1>
              <div className="grid gap-2 text-gray-500">
                <p>
                  A hackathon is a sprint-like event where developers, designers, and innovators come together to build
                  solutions under time pressure. It fosters creativity, collaboration, and rapid prototyping. Whether
                  solving real-world problems or showcasing technical skills, hackathons are where ideas become
                  impactful innovations.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <h4 className="text-indigo-600 font-semibold">Duration</h4>
                    <p>48 Hours</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-orange-500 font-semibold">Team</h4>
                    <p>2-4 members</p>
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
              <ol class="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Venue:</strong> KIST College
                </li>
                <li>
                  <strong>Date:</strong> 6th August to 8th August 2025
                </li>
                <li>
                  <strong>Time:</strong> 8:00 AM to 6:00 PM (everyday)
                </li>
                <li>Team size: Minimum 2 and maximum 4 members.</li>
                <li>Participants should not be organizers, volunteers, judges, or sponsors.</li>
                <li>At least 2 members must be present at the team's allocated stall at all times.</li>
                <li>Teams may seek guidance from organizers, volunteers, and sponsors.</li>
                <li>All work must be done during the hackathon.</li>
                <li>Using pre-existing ideas is allowed, but code must be written during the event.</li>
                <li>Use of libraries, frameworks, or open-source code is allowed. Reusing pre-written code is not.</li>
                <li>
                  Enhancing existing projects is allowed, but only new features will be judged. Inform organizers
                  beforehand.
                </li>
                <li>No hacking allowed after time is up, except for minor debugging or small fixes.</li>
                <li>Projects violating the Code of Conduct will be disqualified.</li>
                <li>Organizers may disqualify teams for rule violations or unfair behavior.</li>
                <li>Code must be regularly pushed to a GitHub repo, and the link must be shared with organizers.</li>
                <li>
                  Strictly no use of AI tools to generate or assist in coding. Doing so results in disqualification.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hackathon
