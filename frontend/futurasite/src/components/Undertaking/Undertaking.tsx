import { motion } from "framer-motion";

function Undertaking() {
  return (
    <section
      className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-24"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-once="true"
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-8 py-16 text-center rounded-3xl shadow-2xl lg:px-16">
        {/* Heading Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          FuturaInsTech (FIT) – IT Solution Providers for Any Vexing Imbroglio
        </motion.h2>

        {/* Subheading */}
        <motion.p className="text-xl font-semibold text-gray-700 dark:text-gray-300 md:text-2xl mt-4 mb-6">
          <strong>Our Undertaking</strong>
        </motion.p>

        {/* Paragraph 1 */}
        <motion.blockquote
          className="text-lg italic text-gray-700 dark:text-gray-300 mb-8 px-6 py-4 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Present us your problems which require IT support, and we shall
          provide you perennial solutions using contemporary cutting-edge
          technology, all while minimizing your investment.
        </motion.blockquote>

        {/* Paragraph 2 */}
        <motion.blockquote
          className="text-lg italic text-gray-700 dark:text-gray-300 mb-8 px-6 py-4 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We have a horde of clients who can corroborate the success of our
          endeavors. Their experiences stand as a testament to the dedication
          and effectiveness of our IT solutions.
        </motion.blockquote>
      </div>
    </section>
  );
}

export default Undertaking;
