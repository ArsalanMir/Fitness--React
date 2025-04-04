import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImage from "../assets/aboutImg.jpg";
import beforeAfter from "../assets/beforeAfter.jpg"; // Make sure to add a real before-after image
import bgVideo from "../assets/bgVideo.mp4"; // Ensure you have a gym-related video
import { FaUsers, FaDumbbell, FaTrophy, FaCalendarAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative text-white">
      {/* Background Video Section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-30"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>

      {/* Overlay to Improve Text Visibility */}
      <div className="absolute inset-0  bg-opacity-70 z-0"></div>

      {/* About Section Content */}
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-10 z-10">
        {/* Left: Gym Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 z-10"
        >
          <img
            src={aboutImage}
            alt="Gym"
            className="rounded-lg shadow-lg w-full md:w-[80%] mx-auto"
          />
        </motion.div>

        {/* Right: About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left z-10"
        >
          <h1 className="text-4xl font-bold text-yellow-400">
            About <span className="text-cyan-400">Our Gym</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            We help you achieve your fitness goals with expert guidance,
            high-quality equipment, and a supportive community.
          </p>

          {/* Motivational Quote */}
          <motion.blockquote
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-6 text-xl italic text-gray-900 border-l-4 border-cyan-400 pl-4"
          >
            "Your body can stand almost anything. It’s your mind that you have to
            convince."
          </motion.blockquote>

          {/* Call to Action */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="mt-6">
            <Link
              to="/services"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section (Placed Below the About Section) */}
      <div className="relative z-10 flex flex-wrap justify-center gap-10 text-center bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg my-10">
        {[
          { icon: <FaUsers size={30} />, value: "5000+", label: "Active Members" },
          { icon: <FaDumbbell size={30} />, value: "20+", label: "Expert Trainers" },
          { icon: <FaTrophy size={30} />, value: "15+", label: "Championships Won" },
          { icon: <FaCalendarAlt size={30} />, value: "10+", label: "Years of Experience" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="text-center"
          >
            <div className="text-yellow-400">{stat.icon}</div>
            <h3 className="text-4xl font-extrabold text-yellow-400">{stat.value}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Before & After Transformation Section (With Proper Spacing) */}
      <div className="relative z-10 text-center p-10">
        <h2 className="text-3xl font-bold text-yellow-400">Real Transformations</h2>
        <p className="text-lg text-gray-300 mt-2">
          See how our members have changed their lives.
        </p>
        <motion.img
          src={beforeAfter}
          alt="Before and After"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-6 mx-auto w-[80%] md:w-[50%] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
