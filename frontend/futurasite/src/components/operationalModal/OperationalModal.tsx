import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

AOS.init();

const OperationalModal = () => {
  const items = [
    {
      title: "Augmentative Investiture",
      description: "Our Functioning Model",
    },
    {
      title: "Cost Effective",
      description: "Comprehensive solutions with frugal expenditure",
    },
    {
      title: "Model Of Operation",
      description:
        "In consonance with the Client’s stipulation, prototype of Operation would be onshore / offshore",
    },
    {
      title: "Demand",
      description: "Onsite depending on project exigency",
    },
    {
      title: "Services",
      description:
        "We administer contract or sub-contract services in conformity with customer propositions",
    },
    {
      title: "Consulting",
      description: "We administer IT and Business Consulting Services",
    },
    {
      title: "Support",
      description: "Bestowing 24 *7 production support is our insignia",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 py-16 px-6 lg:px-16 rounded-3xl shadow-2xl max-w-7xl mx-auto my-16"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
        Our Operational Model
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OperationalModal;
