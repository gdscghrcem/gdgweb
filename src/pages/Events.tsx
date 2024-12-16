import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Hub Conference Center",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      description: "Learn modern web development techniques with React and Node.js."
    },
    {
      id: 2,
      title: "Mobile App Development Bootcamp",
      date: "April 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Space",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      description: "Hands-on workshop on building mobile apps with Flutter."
    },
    {
      id: 3,
      title: "Cloud Computing Summit",
      date: "April 15, 2024",
      time: "1:00 PM - 6:00 PM",
      location: "Digital Arena",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      description: "Explore cloud technologies and best practices with industry experts."
    }
  ];

  return (
    <div className="pt-16">
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl">Join us for exciting tech events, workshops, and meetups!</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;