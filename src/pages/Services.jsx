import { FaDumbbell, FaRunning, FaAppleAlt, FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaDumbbell className="text-4xl text-yellow-500" />,
      title: "Strength Training",
      description: "Build muscle and improve strength with our expert trainers.",
    },
    {
      icon: <FaRunning className="text-4xl text-red-500" />,
      title: "Cardio & Endurance",
      description: "Boost your stamina with high-intensity cardio workouts.",
    },
    {
      icon: <FaAppleAlt className="text-4xl text-green-500" />,
      title: "Nutrition Planning",
      description: "Get customized diet plans for maximum fitness results.",
    },
    {
      icon: <FaHeartbeat className="text-4xl text-blue-500" />,
      title: "Personal Coaching",
      description: "One-on-one coaching sessions for personalized training.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
        Our Services
      </h1>
      <p className="text-center text-gray-600 mt-2 text-lg">
        Achieve your fitness goals with our expert guidance.
      </p>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
