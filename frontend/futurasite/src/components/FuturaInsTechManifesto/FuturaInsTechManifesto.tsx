import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

Aos.init(); // Initialize AOS when the component mounts

function FuturaInsTechManifesto() {
  return (
    <section
      id="Manifesto"
      className="container mx-auto px-6 py-16 bg-gradient-to-br from-indigo-50 via-gray-50 to-indigo-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 rounded-lg shadow-xl"
    >
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4 md:text-4xl lg:text-5xl tracking-tight">
          FuturaInsTech’s Manifesto
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed md:text-xl">
          FuturaInsTech’s IT Solution Providers for any vexing Imbroglio
        </p>
      </div>

      {/* Main Content */}
      <motion.div
        className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Our Undertaking Section */}
        <motion.div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Undertaking
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 text-center leading-relaxed mb-6">
            Present us your problems which require IT support, and we shall
            provide you perennial solutions with contemporary cutting-edge
            technology, all with minimal investment.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-200 text-center leading-relaxed">
            We have a horde of clients to corroborate the endeavour of our
            undertakings.
          </p>
        </motion.div>

        {/* Our Service Propositions Section */}
        <motion.div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Service Propositions
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200 text-center leading-relaxed mb-6">
            “We render to impart sustainable and affordable services which would
            espouse our clients to proffer stellar performance to their
            clientele.”
          </p>
          <p className="text-base text-gray-700 dark:text-gray-200 text-center leading-relaxed">
            With an expansive gamut of amenities in tandem with an infallible
            set of accomplished professionals, we endeavor to provide
            world-class service to our clients.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FuturaInsTechManifesto;
