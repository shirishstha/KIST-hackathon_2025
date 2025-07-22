import React from 'react'
import { useState, useMemo,useEffect } from "react"
import { Search, Filter, Download, Users } from "lucide-react"
import toast from 'react-hot-toast'
import axios from 'axios'

const AdminGraphicDesigning = () => {
    const [participants, setParticipants] = useState([])
     useEffect(()=>{
        const fetchData = async() =>{
            const res = await axios.get(`${import.meta.env.VITE_BACKENDAPI}/admin/graphicdesigning`);
            if(!res.data.success){
              return toast.error(res.data.message);
            }
           setParticipants(res.data.graphicDesigningData)
        }
        fetchData();
     },[])
  const [searchTerm, setSearchTerm] = useState("")
  const [facultyFilter, setFacultyFilter] = useState("")

  const faculties = [...new Set(participants.map((p) => p.faculty))]

  const filteredParticipants = useMemo(() => {
    return participants.filter((participant) => {
      const matchesSearch =
        participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFaculty = !facultyFilter || participant.faculty === facultyFilter
      return matchesSearch && matchesFaculty
    })
  }, [participants, searchTerm, facultyFilter])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">UI/UX Design Competition</h1>
          <p className="text-gray-400 mt-2">Manage registered designers</p>
        </div>
        <div className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg">
          <Users size={20} />
          <span className="font-semibold">{participants.length} Registered</span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={facultyFilter}
              onChange={(e) => setFacultyFilter(e.target.value)}
              className="pl-10 pr-8 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">All Faculties</option>
              {faculties.map((faculty) => (
                <option key={faculty} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>


        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-300">ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Faculty</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Semester</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Contact</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Registered</th>
              </tr>
            </thead>
            <tbody>
              {filteredParticipants.map((participant) => (
                <tr key={participant.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="py-3 px-4 text-gray-300">{participant.id}</td>
                  <td className="py-3 px-4 text-white font-medium">{participant.name}</td>
                  <td className="py-3 px-4 text-gray-300">{participant.email}</td>
                  <td className="py-3 px-4 text-gray-300">{participant.faculty}</td>
                  <td className="py-3 px-4 text-gray-300">{participant.semester}</td>
                  <td className="py-3 px-4 text-gray-300">{participant.contact}</td>
                  <td className="py-3 px-4 text-gray-300">{formatDate(participant.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredParticipants.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">No participants found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminGraphicDesigning