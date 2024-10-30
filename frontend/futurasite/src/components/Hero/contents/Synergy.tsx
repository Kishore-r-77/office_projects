import SynergyImage from "../../../assets/synergy.png";

function Synergy() {
  return (
    <section className="container mx-auto flex h-[650px] flex-col items-center justify-center py-10 bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-lg shadow-xl md:h-[500px] px-6 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-12 text-gray-800 dark:text-white md:grid-cols-2">
        {/* Left Section: Text Content */}
        <div
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-once="true"
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <h1 className="text-4xl font-bold tracking-tight leading-tight md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
            Synergy
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-100 md:text-xl">
            Bridging the gap between Insurance Companies and IT Firms in areas
            of data migration from legacy to contemporary systems, product
            configuration, UAT support, and product implementation.
          </p>
        </div>

        {/* Right Section: Image */}
        <div
          data-aos="fade-left"
          data-aos-duration="400"
          data-aos-once="true"
          className="flex justify-center p-6"
        >
          <img
            src={SynergyImage}
            alt="Synergy illustration"
            className="max-w-sm w-full transform hover:scale-105 transition duration-300 hover:drop-shadow-lg dark:drop-shadow-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Synergy;
