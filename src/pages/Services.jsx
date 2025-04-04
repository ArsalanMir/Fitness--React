import { FaDumbbell, FaRunning, FaAppleAlt, FaHeartbeat, FaSpa, FaBicycle, FaUsers, FaBolt } from "react-icons/fa";
import img1 from "../assets/service1.webp";
import img2 from "../assets/service2.jpeg";
import img3 from "../assets/service3.jpeg";
import img4 from "../assets/service4.webp";
import img5 from "../assets/service5.jpeg";
import img6 from "../assets/service6.jpeg";
import img7 from "../assets/service7.webp";
import img8 from "../assets/service8.webp";


const services = [
  {
    icon: <FaDumbbell className="text-5xl text-yellow-500" />,
    title: "Strength Training",
    description: "Build muscle and improve strength with expert trainers.",
    img: img1,
  },
  {
    icon: <FaRunning className="text-5xl text-red-500" />,
    title: "Cardio & Endurance",
    description: "Boost your stamina with high-intensity cardio workouts.",
    img: img2,
  },
  {
    icon: <FaAppleAlt className="text-5xl text-green-500" />,
    title: "Nutrition Planning",
    description: "Get customized diet plans for maximum fitness results.",
    img: img3,
  },
  {
    icon: <FaHeartbeat className="text-5xl text-blue-500" />,
    title: "Personal Coaching",
    description: "One-on-one coaching sessions for personalized training.",
    img: img4,
  },
  {
    icon: <FaSpa className="text-5xl text-pink-500" />,
    title: "Yoga & Meditation",
    description: "Relax and improve flexibility with guided yoga sessions.",
    img: img5,
  },
  {
    icon: <FaBicycle className="text-5xl text-purple-500" />,
    title: "Cycling Classes",
    description: "High-energy cycling workouts for endurance and fat loss.",
    img: img6,
  },
  {
    icon: <FaUsers className="text-5xl text-orange-500" />,
    title: "Group Training",
    description: "Motivating group fitness classes for all skill levels.",
    img: img7,
  },
  {
    icon: <FaBolt className="text-5xl text-yellow-400" />,
    title: "HIIT Workouts",
    description: "High-intensity interval training for rapid fat burning.",
    img: img8,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-6 pt-24">
      {/* Header */}
      <h1 className="text-5xl font-bold text-center text-yellow-400 uppercase">
        Our Services
      </h1>
      <p className="text-center text-gray-300 mt-2 text-lg">
        Achieve your fitness goals with our expert guidance.
      </p>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            {/* Service Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            />

            {/* Service Content */}
            <div className="p-6 text-center">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-yellow-400 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
