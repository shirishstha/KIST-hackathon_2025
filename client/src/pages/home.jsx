"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Code, Palette, Settings, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Link, useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const eventDate = new Date("2025-08-12T08:00:00").getTime()
  const [isOpen, setIsOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance <= 0) {
        clearInterval(intervalId)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [eventDate])

  useEffect(() => {
    const flag = sessionStorage.getItem("isOpen")
    if (flag === null) {
      sessionStorage.setItem("isOpen", false)
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
    setIsLoading(false)
  }, [])

  return (
    <div className=" z-0">
      <Helmet>
        <title>KIST Hackfest | Home</title>
      </Helmet>
      {/* Hero Section */}
      <div className="min-h-screen w-full relative flex flex-col">
       

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 z-10 relative space-y-3 sm:space-y-0 text-lg">
          <Link to="#"><img src="/logo.png" alt="logo" className="h-20 sm:h-20 mt-1" /></Link>

          <div className="flex space-x-2">
            <div className="shadow-md rounded-lg p-1.5 bg-gradient-to-br from-white/20 to-white/10 w-15 aspect-square text-center">
              {timeLeft.days}
              <div className="text-[10px] text-gray-500">Days</div>
            </div>
            <div className="shadow-md rounded-lg p-1.5 bg-gradient-to-br from-white/20 to-white/10 w-15 aspect-square text-center">
              {timeLeft.hours}
              <div className="text-[10px] text-gray-500">Hours</div>
            </div>
            <div className="shadow-md rounded-lg p-1.5 bg-gradient-to-br from-white/20 to-white/10 w-15 aspect-square text-center">
              {timeLeft.minutes}
              <div className="text-[10px] text-gray-500">Mins</div>
            </div>
            <div className="shadow-md rounded-lg p-1.5 bg-gradient-to-br from-white/20 to-white/10 w-15 aspect-square text-center">
              {timeLeft.seconds}
              <div className="text-[10px] text-gray-500">Secs</div>
            </div>
          </div>
        </nav>

        {!isLoading && isOpen && (
          <div className="min-h-screen fixed w-full z-[1000]">
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

            {/* Countdown Modal */}
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <div className="relative w-full max-w-2xl">
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-4 -right-4 z-30 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Modal content */}
                <div className="bg-black/75 backdrop-blur-2xl backdrop-brightness-50 rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
                  <div className="text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      KIST <span className="bg-gradient-to-br from-blue-800/85 via-blue-500 to-orange-600 text-clip text-transparent bg-clip-text">HACKFEST</span> 2025
                    </h2>
                    <p className="text- mb-6 sm:mb-8 md:mb-10 text-gray-100">Starts in:</p>

                    {/* Countdown display */}
                    <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8">
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 border border-white/10">
                          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                            {timeLeft.days}
                          </div>
                          <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 uppercase tracking-wider">
                            Days
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 border border-white/10">
                          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                            {timeLeft.hours}
                          </div>
                          <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 uppercase tracking-wider">
                            Hours
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 border border-white/10">
                          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                            {timeLeft.minutes}
                          </div>
                          <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 uppercase tracking-wider">
                            Minutes
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 border border-white/10">
                          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                            {timeLeft.seconds}
                          </div>
                          <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 uppercase tracking-wider">
                            Seconds
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Centered Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 text-center space-y-12 z-10 relative">
          <h2 className="shadow-md  rounded-2xl px-4 py-2 hover:text-indigo-500 hover:border-gray-300 flex items-center">
            <Calendar className="text-blue-600 mr-2" size={18} />
            August 12-14, 2025
          </h2>

          <h1 className="text-4xl sm:text-5xl font-bold leading-snug block">
            <span className=" text-blue-800">KIST</span>
            <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent block">
              HACKFEST
            </span>
            <span className="block mt-1 text-2xl">2025</span>
          </h1>

          <h3 className="typing-text text-black sm:text-lg">
            Elevate your <span className="gradientEffect">Creativity</span> with
            <span className="gradientEffect"> Innovation.</span>
          </h3>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-14 pt-8 font-bold">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl text-black/70">48</span>
              <span className="text-sm text-gray-600">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl text-black/70">100+</span>
              <span className="text-sm text-gray-600">Participants</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl text-black/70">30+</span>
              <span className="text-sm text-gray-600">Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* "Are you ready?" Section */}
      <div className="min-h-screen px-4 py-16 flex flex-col justify-center items-center space-y-10 ">
        <div className="text-center space-y-4 max-w-xl">
          <h1 className="text-4xl font-bold">Are you ready?</h1>
          <p className="text-gray-500">
            Join KIST Hackfest to test your creative skills that drive you towards your future
            innovation and objectives.
          </p>
          <Button onClick={() => navigate("/registration")}>Click to Register</Button>
        </div>

        {/* Event Descriptions */}
        <div className="flex flex-wrap justify-center gap-17 pt-10">
          <div
            className="shadow-md hover:shadow-lg rounded-lg p-6 max-w-xs space-y-2 cursor-pointer"
            onClick={() => navigate("/codewar")}
          >
            <Code className="bg-blue-500 h-8 w-8 p-2 rounded-lg text-white" />
            <h2 className="text-xl font-bold">Code War</h2>
            <p className="text-gray-500 text-justify">
              Face off against the best coders in a series of mind-bending programming challenges designed to test your
              logic, problem-solving, and algorithmic skills. Whether you're a Python prodigy or a JavaScript ninja,
              this is your arena to prove your mettle.
            </p>
          </div>

          <div
            className="shadow-md hover:shadow-lg rounded-lg p-6 max-w-xs space-y-2 cursor-pointer"
            onClick={() => navigate("/hackathon")}
          >
            <Settings className="bg-orange-500 h-8 w-8 p-2 rounded-lg text-white" />
            <h2 className="text-xl font-bold">Hackathon</h2>
            <p className="text-gray-500 text-justify">
              Code. Create. Conquer. The hackathon is your playground to transform imagination into innovation—build stunning web solutions, smart mobile apps, or powerful hardware projects. Tackle real challenges, showcase your brilliance, and leave a legacy.
            </p>
          </div>

          <div
            className="shadow-md hover:shadow-lg rounded-lg p-6 max-w-xs space-y-2 cursor-pointer"
            onClick={() => navigate("/ui-ux")}
          >
            <Palette className="bg-blue-800/85 h-8 w-8 p-2 rounded-lg text-white" />
            <h2 className="text-xl font-bold">UI/UX Competition</h2>
            <p className="text-gray-500 text-justify">
              Empathize. Design. Elevate. The UI/UX competition is your stage to craft intuitive experiences—wireframes, prototypes, or full-fledged interfaces. Solve real user pain points, present your vision, and redefine how people interact with technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
