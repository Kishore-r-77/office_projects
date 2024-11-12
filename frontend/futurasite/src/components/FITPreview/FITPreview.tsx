import { useState } from "react";
import { motion } from "framer-motion"; // Optional: for smooth animation effects

function FITPreview() {
  const [isExpanded, setIsExpanded] = useState(false); // state to handle expand/collapse

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:bg-gradient-to-br dark:from-violet-800 dark:to-violet-900 py-20">
      <section
        id="About"
        className="container mx-auto flex flex-col items-center justify-center px-8 py-16 dark:bg-gray-800 dark:rounded-xl dark:shadow-xl rounded-xl shadow-xl lg:px-20"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
          className="flex flex-col gap-8 text-center text-gray-800 dark:text-gray-100 md:text-left"
        >
          {/* Heading Section with Icon */}
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-6 leading-tight tracking-tight">
              About Us
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 md:text-xl mb-6">
            FuturaInsTech is a Start-Up Insurance FinTech Company ordained in
            July 2019 by 1st Generation Entrepreneurs. FuturaInsTech is a
            conglomerate of Insurance-based Technocrats nurturing over three
            decades of expertise in Information Technology.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 md:text-xl mb-6">
            The team's IT voyage commenced in the Pre-Y2K era, traversing
            through Y2K Conversion and Support, Core Insurance Implementation
            encompassing both “Green Fields” as well as “Migrations”.
          </p>

          {/* Expandable More About Us Section */}
          <motion.div
            className="w-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={toggleExpanded}
              className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
            >
              More About Us
            </button>
            {isExpanded && (
              <div className="mt-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300 md:text-xl">
                <p>
                  FuturaInsTech is an Information Technology (IT) company
                  instituted by a team of highly professional IT individuals.
                  FuturaInsTech caters to IT solutions for Insurance-based
                  products, from Pre-Sales Support to Settlement of Claims, in
                  addition to liaising with Regulatory Authorities. The team
                  possesses extensive and intimate knowledge of global Insurance
                  products, with profound expertise in System Integration,
                  Insurance Transformation, Business Process Re-Engineering,
                  Implementation, Data Migration, and effective maintenance of
                  any Insurance application—whether built on Legacy Technology
                  or contemporary systems. With our IT solutions, we ensure the
                  continuous functioning of core business while optimizing
                  investment.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FITPreview;
