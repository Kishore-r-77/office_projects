import { motion } from "framer-motion";

function Undertaking() {
  return (
    <section className="py-16">
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white px-6 md:px-20 lg:px-32 py-12 rounded-lg shadow-md">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-violet-800 dark:text-violet-300 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Service Propositions
          </motion.h2>

          {/* Quote */}
          <motion.blockquote
            className="text-lg italic text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            “We render to impart sustainable and affordable services which would
            espouse our clients to proffer stellar performance to their
            clientele.”
          </motion.blockquote>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            With an expansive gamut of amenities in tandem with an infallible
            set of accomplished professionals, we endeavour to provide
            world-class service to our clients.
          </motion.p>
        </div>
      </main>
    </section>
  );
}

export default Undertaking;
