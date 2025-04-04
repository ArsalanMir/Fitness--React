import React from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-6 text-white">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-cyan-400">Contact Us</h1>
      <p className="text-lg text-gray-300 mt-2 text-center">
        Got questions? Reach out to us anytime!
      </p>

      {/* Contact Form */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 mt-6 w-full max-w-lg border border-gray-700">
        <form className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <label className="block text-gray-300 font-semibold">Name</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-4">
              <FaUser className="text-cyan-400" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent px-3 py-2 focus:outline-none text-white"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="block text-gray-300 font-semibold">Email</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-4">
              <FaEnvelope className="text-cyan-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-2 focus:outline-none text-white"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="relative">
            <label className="block text-gray-300 font-semibold">Message</label>
            <div className="flex items-start bg-gray-900 rounded-lg px-4">
              <FaCommentDots className="text-cyan-400 mt-3" />
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full bg-transparent px-3 py-2 focus:outline-none text-white"
              ></textarea>
            </div>
          </div>

          {/* Send Message Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg text-lg 
                      hover:bg-yellow-500 transition-transform transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-3xl text-cyan-400 text-center font-semibold mb-4">Find Us Here</h2>
        <iframe
          className="w-full h-72 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509375!2d144.95373631531668!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57795e3733b097!2sFitness%20Gym!5e0!3m2!1sen!2s!4v1649920593245"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
