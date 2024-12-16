import React from 'react';
import { Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">About Google Developer Groups</h1>
          <p className="text-xl max-w-3xl mx-auto">We are a community of developers passionate about Google technologies and dedicated to learning, sharing, and building together.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">To create an inclusive environment where developers can network, learn, and grow together.</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">Community, Innovation, Knowledge sharing, and Inclusivity are at the heart of everything we do.</p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">To empower developers to build innovative solutions that make a positive impact on society.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Started in 2009, Google Developer Groups (GDGs) are community-led developer groups that create opportunities for developers to meet and learn about Google technologies and development platforms.
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
              alt="Team Collaboration"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;