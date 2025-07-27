import { Button } from "@/components/ui/button"
import { Code, MoveLeft, Palette, Settings } from "lucide-react"
import { Helmet } from "react-helmet"
import { Link, useNavigate } from "react-router-dom"

const Registration = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Helmet>
        <title>KIST Hackfest | Registration</title>
      </Helmet>
      <nav className="flex h-30">
          <Link to="/"> <img src="/logo.png" alt="" className=" m-5 h-20" /></Link>
        <Button
          variant="ghost"
          className="hover:bg-transparent hover:text-black absolute right-2 lg:right-10 top-10 hover:scale-101"
          onClick={() => navigate("/")}
        >
          <MoveLeft className="w-10 text-indigo-700" /> Go back
        </Button>
      </nav>
      <div className="w-full items-center flex flex-col">
        <h1 className="text-3xl gradientEffect">Select Competiton</h1>
        <p className="text-sm text-gray-500 text-center">
          Choose your desired competion according to your interest and profeciency.
        </p>
      </div>
      <div className="flex justify-between w-full py-25 px-5 lg:p-20 flex-wrap space-y-8 ">
        <div className="myShadow hover:shadow-2xl  group hover:scale-105 transition-all ease-in-out duration-300 rounded-lg p-5 space-y-3 flex flex-col items-center w-full lg:w-90">
          <Code className=" bg-blue-800/85 h-12 rounded-lg w-12 p-2 text-white" />
          <h1 className="text-xl font-bold text-black/80 group-hover:text-black">Code War</h1>
          <p className="text-gray-500 text-center pb-5 group-hover:text-black">
            Individual coding competition to test your programming skills
          </p>
          <div className="space-y-2 mb-6  text-gray-500 group-hover:text-gray-600">
            <p>• Individual Competition</p>
            <p>• 2 Hours Duration</p>
            <p>• Multiple Programming Languages</p>
            <p>• Real-time Leaderboard</p>
          </div>
          <Button className="shadow-none hover:scale-105 ease-in-out duration-200 bg-gradient-to-r from-blue-800/85 via-blue-600 to-indigo-500" onClick={() => navigate("/codewar")}>
            Register for Code War
          </Button>
        </div>
        <div className="myShadow hover:shadow-2xl  group hover:scale-105 transition-all ease-in-out duration-300 rounded-lg p-5 space-y-3 flex flex-col items-center w-full lg:w-90">
          <Settings className=" bg-orange-500 h-12 rounded-lg w-12 p-2 text-white" />
          <h1 className="text-xl font-bold text-black/80 group-hover:text-black">Hackathon</h1>
          <p className="text-gray-500 text-center pb-5 group-hover:text-black">
            48-hour team challenge to build innovative solutions
          </p>
          <div className="space-y-2 mb-6  text-gray-500">
            <p>• Team Competition (2-4 members)</p>
            <p>• 3 days Duration</p>
            <p>• Innovation & Creativity</p>
            <p>• Mentorship Available</p>
          </div>
          <Button
            className="shadow-none hover:scale-105 ease-in-out duration-200"
            onClick={() => navigate("/hackathon")}
          >
            Register for Hackathon
          </Button>
        </div>
        <div className="myShadow hover:shadow-2xl  group hover:scale-105 transition-all ease-in-out duration-300 rounded-lg p-5 space-y-3 mb-[32px] flex flex-col items-center w-full lg:w-90">
          <Palette className=" bg-blue-800/85 h-12 rounded-lg w-12 p-2 text-white" />
          <h1 className="text-xl font-bold text-black/80 group-hover:text-black">UI/UX</h1>
          <p className="text-gray-500 text-center pb-10 group-hover:text-black ">
            Showcase your creativity and design skills
          </p>
          <div className="space-y-2 mb-6  text-gray-500">
            <p>• Individual Competition</p>
            <p>• 6 Hours Duration</p>
            <p>• Creative Freedom</p>
            <p>• Professional Judging</p>
          </div>
          <Button className="shadow-none hover:scale-105 ease-in-out duration-200 bg-gradient-to-r from-blue-800/85 via-blue-600 to-indigo-500" onClick={() => navigate("/ui-ux")}>
            Register for UI/UX
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Registration
