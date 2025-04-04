import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Personal from "../assets/Personal.jpg"
import Strength from "../assets/Strength.jpg"
import WeightLoss from "../assets/WeightLoss.jpg"
import Yoga from "../assets/Yoga.jpg"

// Why Choose Us
const benefits = [
  { title: "24/7 Access", desc: "Workout anytime, day or night!", icon: "⏰" },
  { title: "Expert Trainers", desc: "Certified trainers to guide you.", icon: "💪" },
  { title: "Modern Equipment", desc: "High-tech machines & weights.", icon: "🏋️" },
  { title: "Personalized Plans", desc: "Customized training & diet.", icon: "📋" },
];

// Featured Programs
const programs = [
  { title: "Strength Training", desc: "Build muscle & gain power.", img: Strength },
  { title: "Weight Loss", desc: "Burn fat & achieve your goals.", img: WeightLoss },
  { title: "Yoga & Flexibility", desc: "Improve balance & reduce stress.", img: Yoga},
  { title: "Personal Training", desc: "One-on-one expert coaching.", img: Personal },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us */}
      <motion.div 
        className="py-16 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gold uppercase">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border-b-4 border-gold transition duration-300 ease-in-out"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gold">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Featured Programs */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gold uppercase">Our Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              <img src={program.img} alt={program.title} className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <p className="text-gray-300">{program.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-gold to-yellow-500 text-black">
        <h2 className="text-4xl font-bold mb-4 uppercase">Start Your Fitness Journey Today!</h2>
        <p className="text-lg mb-6">Join now and get a free consultation with our expert trainers.</p>
        <Link
          to="/plans"
          className="bg-white text-black px-6 py-3 font-bold text-lg rounded-lg hover:bg-blue-500 transition shadow-lg hover:scale-105"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
