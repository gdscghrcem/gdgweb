import React from 'react';
import { ArrowRight, Calendar, Users, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCard } from '../components/AnimatedCard';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
            alt="Developer Conference"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="hero-title">Google Developer Groups</h1>
          <p className="subtitle text-xl mb-8 max-w-2xl">Connect, learn, and grow with a global community of developers. Join us in building the future of technology.</p>
          <Link 
            to="/events" 
            className="animated-button inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Upcoming Events
            <ArrowRight className="ml-2 h-5 w-5 animate-float" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 stagger-animate">
            <AnimatedCard delay={0.1}>
              <div className="text-center p-6">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-2">Regular Events</h3>
                <p className="text-gray-600">Workshops, hackathons, and tech talks to keep you updated with the latest technologies.</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="text-center p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Join a diverse community of developers, designers, and tech enthusiasts.</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="text-center p-6">
                <Globe2 className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                <p className="text-gray-600">Connect with developers from around the world and expand your network.</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-white text-lg mb-8">Get involved in our upcoming events and connect with fellow developers.</p>
          <Link 
            to="/contact" 
            className="animated-button inline-block bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;