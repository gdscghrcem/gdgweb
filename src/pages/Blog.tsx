import React from 'react';
import { Clock, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning",
      excerpt: "Learn the basics of machine learning and how to implement your first ML model.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Web Development Best Practices 2024",
      excerpt: "Discover the latest trends and best practices in web development for 2024.",
      author: "Michael Chen",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Cloud Computing Fundamentals",
      excerpt: "Understanding the basics of cloud computing and its implementation.",
      author: "Alex Turner",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-16">
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-xl">Stay updated with the latest in technology and development</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;