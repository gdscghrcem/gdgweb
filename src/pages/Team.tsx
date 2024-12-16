import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const team = [
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
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "Full-stack developer with expertise in cloud technologies."
    },
    {
      id: 3,
      name: "David Kumar",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      bio: "Organizing tech events and workshops for the community."
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Content Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      bio: "Creating engaging content and managing social media presence."
    }
  ];

  return (
    <div className="pt-16">
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          <p className="text-xl">Meet the passionate individuals behind GDG</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;