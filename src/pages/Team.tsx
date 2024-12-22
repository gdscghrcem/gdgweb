import React, { useState } from 'react'
import { Linkedin, Mail, Code, Megaphone, Palette, Calendar, PenTool, DollarSign, Users, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
};

type Teams = {
  [key: string]: TeamMember[];
};

const Team: React.FC = () => {
  const teams: Teams = {
    'Core': [
      {
        id: 1,
        name: "John Smith",
        role: "Community Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        bio: "Passionate about building communities and fostering innovation."
      },
      {
        id: 2,
        name: "Emily Chen",
        role: "Operations Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        bio: "Ensuring smooth operations and strategic planning for GDG."
      },
    ],
    'Tech': [
      {
        id: 3,
        name: "Alex Johnson",
        role: "Tech Lead",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
        bio: "Full-stack developer with expertise in cloud technologies and AI."
      },
    ],
    'Public Relation': [
      {
        id: 4,
        name: "Sarah Wilson",
        role: "PR Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        bio: "Managing public relations and community outreach for GDG."
      },
    ],
    'Design': [
      {
        id: 5,
        name: "Michael Lee",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        bio: "Creating beautiful and intuitive designs for GDG projects."
      },
    ],
    'Event': [
      {
        id: 6,
        name: "David Kumar",
        role: "Event Coordinator",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
        bio: "Organizing tech events and workshops for the community."
      },
    ],
    'Content': [
      {
        id: 7,
        name: "Lisa Zhang",
        role: "Content Lead",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
        bio: "Creating engaging content and managing social media presence."
      },
    ],
    'Finance': [
      {
        id: 8,
        name: "Robert Tan",
        role: "Finance Manager",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
        bio: "Managing budgets and financial planning for GDG initiatives."
      },
    ],
  }

  const [activeTeam, setActiveTeam] = useState<keyof Teams>('Core');

  const teamIcons: { [key in keyof Teams]: JSX.Element } = {
    'Core': <Users className="w-6 h-6" />,
    'Tech': <Code className="w-6 h-6" />,
    'Public Relation': <Megaphone className="w-6 h-6" />,
    'Design': <Palette className="w-6 h-6" />,
    'Event': <Calendar className="w-6 h-6" />,
    'Content': <PenTool className="w-6 h-6" />,
    'Finance': <DollarSign className="w-6 h-6" />,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-20 text-white bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <motion.h1 
            className="mb-6 text-5xl font-bold"
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {teams[activeTeam].map((member, index) => (
                <motion.div
                  key={member.id}
                  className="overflow-hidden transition-all duration-300 transform bg-white shadow-xl rounded-xl hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-64"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute text-white bottom-4 left-4">
                      <h3 className="mb-1 text-2xl font-bold">{member.name}</h3>
                      <p className="font-medium text-gray-200">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-gray-600">{member.bio}</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-600 transition-colors duration-200 hover:text-blue-600">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-600 transition-colors duration-200 hover:text-blue-600">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-600 transition-colors duration-200 hover:text-blue-600">
                        <Mail className="w-5 h-5" />
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

