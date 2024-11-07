import { motion } from "framer-motion";
import { FaGem } from "react-icons/fa"; // For icons

const GemsOfGoLife = () => {
  const features = [
    "Complete end-to-end Life Insurance cycle from “Quotation Generation” to “Claims Settlement” with a foolproof Audit Trail.",
    "Convert Pre-Sales Quotation to Proposal/Policy on acceptance by Client.",
    "Form new Company with varied geographic locations and distinct accounting.",
    "Support Multi-Currency Transactions and Multi-Lingual Interactions.",
    "Instant Policy status updates on premium payments.",
    "Real-time messaging to Clients and Agents on Receipts and Payments.",
    "Seamless portability of Policy Service between locations.",
    "Hassle-free Transaction Reversals, with accurate Account Entries.",
    "TDF (Time Driven Function) ensures Real-Time Updation without Batch Jobs.",
    // "MWB (Microsoft Work Bench) enables seamless Data Migration.",
    // "Comprehensive Re-Insurance module in a concise package.",
    // "Lower Maintenance costs for Life Insurance Software and Data.",
  ];

  // Define colors for gem icons
  const gemColors = [
    "text-red-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500",
    "text-purple-500",
    "text-indigo-500",
    "text-pink-500",
    "text-teal-500",
    "text-orange-500",
    // "text-gray-500",
    // "text-cyan-500",
    // "text-lime-500",
  ];

  return (
    <section
      className="py-16 px-8 lg:px-20 bg-gradient-to-r from-blue-100 via-white to-blue-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 rounded-3xl shadow-2xl max-w-7xl mx-auto my-16"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-4xl font-bold text-center text-indigo-800 dark:text-indigo-200 mb-12">
        FuturaInstech's Gamechanger – Navaratna of “GoLife”
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative group transition-all duration-300 hover:shadow-xl"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div
              className={`text-4xl ${
                gemColors[index % gemColors.length]
              } mb-4 flex justify-center`}
            >
              <FaGem />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
              Gem {index + 1}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center group-hover:opacity-100 opacity-0 transition-opacity duration-300">
              {feature}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GemsOfGoLife;
