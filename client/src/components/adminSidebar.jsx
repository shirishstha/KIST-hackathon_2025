import { Link, useLocation, useNavigate } from "react-router-dom"
import { Code, Trophy, Palette } from "lucide-react"
import { Button } from "./ui/button"
import toast from "react-hot-toast"

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "CodeWar",
      path: "/admin/codewar",
      icon: Code,
    },
    {
      name: "Hackathon",
      path: "/admin/hackathon",
      icon: Trophy,
    },
    {
      name: "UI/UX",
      path: "/admin/graphicdesigning",
      icon: Palette,
    },
  ]
  const handleLogout = () => {
    localStorage.removeItem('admin');
    toast.success("Logged out Successfully");
    navigate('/');
  }

  return (
    <div className="fixed left-0 top-0 h-full w-64  border-r border-gray-700">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">KIST HACKFEST</h1>
            <p className="text-gray-400 text-sm">Competition Dashboard</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="absolute bottom-5 left-20">
        <Button onClick={()=> handleLogout()}>Logout</Button>
      </div>

    </div>
  )
}

export default Sidebar
