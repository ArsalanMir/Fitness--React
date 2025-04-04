import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../assets/bodyhero.jpg";

const Hero = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-6 relative overflow-hidden pt-28"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Background Zoom Effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      ></motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center p-6 sm:p-8 rounded-lg shadow-lg relative z-10"
      >
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wide text-yellow-400"
          style={{
            textShadow: "4px 4px 10px rgba(255, 215, 0, 0.8)",
          }}
        >
          Transform Your Body
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base sm:text-lg mt-4 max-w-md mx-auto text-gray-300"
        >
          Join the best gym in town and achieve your fitness goals with expert trainers.
        </motion.p>

        {/* Glowing Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="mt-6">
          <Link
            to="/services"
            className="relative inline-block bg-yellow-400 text-black px-6 py-3 font-bold text-lg rounded-lg transition shadow-lg hover:bg-yellow-600 hover:scale-105"
          >
            Join Now
            <motion.span
              className="absolute inset-0 rounded-lg bg-yellow-400 opacity-50 blur-lg"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <div className="absolute bottom-10 w-full flex justify-center px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-black bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-2xl">
          {/* Trainers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">20+</h3>
            <p className="text-gray-300 text-sm sm:text-base">Expert Trainers</p>
          </motion.div>

          {/* Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">5000+</h3>
            <p className="text-gray-300 text-sm sm:text-base">Active Members</p>
          </motion.div>

          {/* Years of Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">10+</h3>
            <p className="text-gray-300 text-sm sm:text-base">Years of Experience</p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">15+</h3>
            <p className="text-gray-300 text-sm sm:text-base">Championships Won</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
