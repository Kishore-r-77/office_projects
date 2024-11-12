import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS if not imported yet

Aos.init(); // Initialize AOS when the component mounts

function FuturaInsTechEnterprise() {
  return (
    <section
      id="Enterprise"
      className="container mx-auto px-6 py-16 bg-gradient-to-br from-indigo-50 via-gray-50 to-indigo-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 rounded-lg shadow-xl"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4 md:text-5xl lg:text-6xl tracking-tight">
          FuturaInsTech’s Enterprise
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed md:text-xl">
          Empowering insurance companies with technology and strategic
          consulting for the future of the industry.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Planning & Consulting Section */}
        <motion.div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Planning & Consulting
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 text-center leading-relaxed">
            We provide comprehensive support to insurance companies, assisting
            in product configuration, modernizing legacy applications, and
            delivering technical and business solutions with seamless
            post-production services.
          </p>
        </motion.div>

        {/* Technologies & Consulting Section */}
        <motion.div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Technologies & Consulting
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 text-center leading-relaxed">
            Professing core technology expertise, we provide seamless migration,
            transformation, and business process re-engineering services to
            ensure insurance companies achieve their strategic objectives.
          </p>
        </motion.div>

        {/* Synergy Section */}
        <motion.div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Synergy
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 text-center leading-relaxed">
            Bridging the gap between Insurance Companies and IT Firms in areas
            of data migration from legacy to contemporary systems, product
            configuration, UAT support, and product implementation.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FuturaInsTechEnterprise;
