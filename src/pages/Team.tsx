
import React, { useState } from 'react'
import { Github, Linkedin, Mail, Code, Megaphone, Palette, Calendar, PenTool, DollarSign, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { teams, Teams, TeamMember } from '../lib/team-data'

const Team: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<keyof Teams>('Core');

  const teamIcons: { [key in keyof Teams]: JSX.Element } = {
    'Core': <Users className="w-6 h-6" />,
    'Tech': <Code className="w-6 h-6" />,
    'Design': <Palette className="w-6 h-6" />,
    'Finance': <DollarSign className="w-6 h-6" />,
    'Public Relations': <Megaphone className="w-6 h-6" />,
    'Event Management': <Calendar className="w-6 h-6" />,
    'Content': <PenTool className="w-6 h-6" />,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our {activeTeam} Team
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the passionate individuals behind GDG
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {(Object.keys(teams) as Array<keyof Teams>).map((teamName) => (
              <motion.button
                key={teamName}
                onClick={() => setActiveTeam(teamName)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTeam === teamName
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {teamIcons[teamName]}
                <span>{teamName}</span>
              </motion.button>
            ))}
          </motion.nav>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTeam}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {teams[activeTeam].map((member: TeamMember, index: number) => (
                <motion.div
                  key={member.id}
                  className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-gray-200 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex space-x-4">
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={`mailto:${member.mail}`} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default Team

