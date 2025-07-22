import React from 'react'
import { useState, useMemo, useEffect } from "react"
import { Search, Filter, Download, Users, User } from "lucide-react"
import axios from 'axios'

const AdminHackathon = () => {
    const [teams, setTeam] = useState([]);
      useEffect(()=>{
        const fetchData = async() =>{
            const res = await axios.get(`${import.meta.env.VITE_BACKENDAPI}/admin/hackathon`);
            if(!res.data.success){
              return toast.error(res.data.message);
            }
           setTeam(res.data.hackathonData);
        }
        fetchData();
     },[])

  const [searchTerm, setSearchTerm] = useState("")
  const [facultyFilter, setFacultyFilter] = useState("")

  const faculties = [...new Set(teams.map((t) => t.faculty))]

  const filteredTeams = useMemo(() => {
    return teams.filter((team) => {
      const matchesSearch =
        team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFaculty = !facultyFilter || team.faculty === facultyFilter
      return matchesSearch && matchesFaculty
    })
  }, [teams, searchTerm, facultyFilter])

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
          <h1 className="text-3xl font-bold text-white">Hackathon Competition</h1>
          <p className="text-gray-400 mt-2">Manage registered teams</p>
        </div>
        <div className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg">
          <Users size={20} />
          <span className="font-semibold">{teams.length} Teams Registered</span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by team name or email..."
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

        <div className="space-y-4">
          {filteredTeams.map((team) => (
            <div key={team.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span>ID: {team.id}</span>
                    <span>Email: {team.email}</span>
                    <span>Contact: {team.contact}</span>
                    <span>Faculty: {team.faculty}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-400 mt-2 lg:mt-0">
                  <User size={16} />
                  <span className="font-semibold">{team.members.length} Members</span>
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <h4 className="text-lg font-semibold text-white mb-3">Team Members</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {team.members.map((member, index) => (
                    <div key={index} className="bg-gray-600 rounded-lg p-3">
                      <p className="font-medium text-white">{member.name}</p>
                      <p className="text-sm text-gray-300">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4 mt-4">
                <p className="text-sm text-gray-400">Registered: {formatDate(team.createdAt)}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">No teams found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminHackathon