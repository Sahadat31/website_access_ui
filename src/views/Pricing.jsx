import { motion } from "framer-motion";

const plans = [
  {
    title: "Free",
    price: "₹0",
    features: ["1 scan per day", "Basic issue reporting", "Limited support"],
  },
  {
    title: "Pro",
    price: "₹499/month",
    features: ["Unlimited scans", "Detailed reports", "Priority support", "PDF downloads"],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Team management", "API access", "Dedicated support", "Custom branding"],
  },
];

const Pricing = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto p-6 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold text-indigo-600 mb-4">{plan.price}</p>
            <ul className="text-gray-600 space-y-2 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i}>✔️ {feature}</li>
              ))}
            </ul>
            <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Pricing;
