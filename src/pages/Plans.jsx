import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic Plan",
    price: "$19.99/mo",
    features: ["Access to Gym", "Locker Facility", "Free WiFi"],
    color: "from-gray-800 to-gray-900",
    border: "border-blue-400",
  },
  {
    name: "Pro Plan",
    price: "$39.99/mo",
    features: ["All Basic Features", "Personal Trainer", "Nutrition Guide"],
    color: "from-blue-800 to-blue-900",
    border: "border-yellow-400",
  },
  {
    name: "Elite Plan",
    price: "$59.99/mo",
    features: ["All Pro Features", "24/7 Access", "Exclusive Gym Events"],
    color: "from-yellow-600 to-yellow-700",
    border: "border-cyan-400",
  },
];

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-6 pt-24">
      {/* Added pt-24 to create space between Navbar & heading */}
      
      <h1 className="text-5xl font-bold text-center text-cyan-400 uppercase">
        Choose Your Plan
      </h1>
      <p className="text-center text-gray-400 mt-3 text-lg">
        Select the plan that fits your fitness journey.
      </p>

      {/* Pricing Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b ${plan.color} p-8 rounded-lg shadow-lg border-2 ${plan.border} 
                        transition-transform transform hover:scale-105 hover:shadow-2xl`}
          >
            <h2 className="text-3xl font-bold text-center text-yellow-300">
              {plan.name}
            </h2>
            <p className="text-2xl font-semibold text-center mt-4 text-gray-300">
              {plan.price}
            </p>
            <div className="mt-6 space-y-3">
              {plan.features.map((feature, idx) => (
                <p key={idx} className="flex items-center space-x-2 text-lg text-gray-200">
                  <FaCheckCircle className="text-green-400" />
                  <span>{feature}</span>
                </p>
              ))}
            </div>

            <button className="mt-6 w-full py-3 bg-yellow-400 text-black font-bold rounded-lg text-lg 
                               hover:bg-yellow-500 transition duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
