import React from 'react'

const Home = () => {
    return (
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/src/assets/gym-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  
        {/* Hero Content */}
        <div className="relative z-10 text-center p-6">
          <h1 className="text-5xl md:text-7xl font-bold uppercase">
            Transform Your Body
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Join us today & become the best version of yourself!
          </p>
  
          {/* CTA Buttons */}
          <div className="mt-6 space-x-4">
            <a
              href="/services"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="bg-transparent border border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  