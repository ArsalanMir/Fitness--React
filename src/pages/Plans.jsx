import { FaCheckCircle, FaCrown, FaStar, FaDumbbell } from "react-icons/fa";

const plans = [
  {
    name: "Basic Plan",
    price: "$19.99/mo",
    features: ["Access to Gym", "Locker Facility", "Free WiFi"],
    color: "from-gray-800 to-gray-900",
    border: "border-blue-400",
    icon: <FaDumbbell className="text-blue-400 text-4xl" />,
  },
  {
    name: "Pro Plan",
    price: "$39.99/mo",
    features: ["All Basic Features", "Personal Trainer", "Nutrition Guide"],
    color: "from-blue-800 to-blue-900",
    border: "border-yellow-400",
    icon: <FaStar className="text-yellow-400 text-4xl" />,
    bestValue: true, // This plan will have a "Best Value" badge
  },
  {
    name: "Elite Plan",
    price: "$59.99/mo",
    features: ["All Pro Features", "24/7 Access", "Exclusive Gym Events"],
    color: "from-yellow-600 to-yellow-700",
    border: "border-cyan-400",
    icon: <FaCrown className="text-cyan-400 text-4xl" />,
  },
];

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-6 pt-24">
      <h1 className="text-5xl font-bold text-center text-cyan-400 uppercase">
        Choose Your Plan
      </h1>
      <p className="text-center text-gray-400 mt-3 text-lg">
        Select the plan that fits your fitness journey.
      </p>

      {/* Pricing Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-b ${plan.color} p-8 rounded-lg shadow-lg border-2 ${plan.border} 
                        transition-transform transform hover:scale-105 hover:shadow-2xl`}
          >
            {/* Best Value Badge */}
            {plan.bestValue && (
              <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                Best Value
              </div>
            )}

            {/* Plan Icon */}
            <div className="flex justify-center mb-4">{plan.icon}</div>

            <h2 className="text-3xl font-bold text-center text-yellow-300">
              {plan.name}
            </h2>
            <p className="text-2xl font-semibold text-center mt-2 text-gray-300">
              {plan.price}
            </p>

            {/* Features List */}
            <div className="mt-6 space-y-3">
              {plan.features.map((feature, idx) => (
                <p
                  key={idx}
                  className="flex items-center space-x-2 text-lg text-gray-200"
                >
                  <FaCheckCircle className="text-green-400" />
                  <span>{feature}</span>
                </p>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-6 w-full py-3 bg-yellow-400 text-black font-bold rounded-lg text-lg 
                               hover:bg-yellow-500 transition duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Membership Perks Section */}
      <div className="mt-16 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 uppercase">
          Membership Perks
        </h2>
        <p className="text-lg text-gray-300 mt-3">
          Enjoy exclusive benefits when you become a member.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {[
            { icon: <FaDumbbell />, text: "State-of-the-Art Equipment" },
            { icon: <FaStar />, text: "Expert Personal Trainers" },
            { icon: <FaCrown />, text: "VIP Lounge & Sauna" },
            { icon: <FaCheckCircle />, text: "Exclusive Member Events" },
          ].map((perk, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="text-4xl text-yellow-400 mb-3">{perk.icon}</div>
              <p className="text-gray-300 text-lg">{perk.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
