import React from 'react'

const About = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center p-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/about-gym.jpg"
            alt="Gym"
            className="rounded-lg shadow-lg"
          />
        </div>
  
        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            About <span className="text-blue-600">Our Gym</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Our gym is more than just a fitness center—it's a place where you can
            push your limits, challenge yourself, and become the best version of
            yourself.
          </p>
          <p className="text-lg text-gray-600 mt-2">
            We offer state-of-the-art equipment, expert trainers, and a community
            of like-minded individuals who support each other.
          </p>
  
          {/* Motivational Quote */}
          <blockquote className="mt-6 text-xl italic text-gray-700 border-l-4 border-blue-500 pl-4">
            "The only bad workout is the one that didn’t happen."
          </blockquote>
  
          {/* Call to Action */}
          <div className="mt-6">
            <a
              href="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  