import PlanningImage from "../../../assets/planning.jpg";

function Planning() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-10 bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:bg-gradient-to-br dark:from-indigo-900 dark:via-purple-800 dark:to-indigo-700 rounded-lg shadow-xl md:h-[500px] px-6 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-8 text-gray-800 dark:text-white md:grid-cols-2 md:gap-12">
        {/* Left Section: Text Content */}
        <div
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-once="true"
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <h1 className="text-3xl font-bold tracking-tight leading-tight md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
            Planning and Consulting
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-100 md:text-xl">
            We provide comprehensive support to insurance companies, assisting
            in product configuration, modernizing legacy applications, and
            delivering technical and business solutions with seamless
            post-production services.
          </p>
        </div>

        {/* Right Section: Image */}
        <div
          data-aos="fade-left"
          data-aos-duration="400"
          data-aos-once="true"
          className="flex justify-center p-6 relative overflow-hidden"
        >
          <img
            src={PlanningImage}
            alt="Planning and Consulting illustration"
            className="w-full h-auto max-h-[350px] object-contain transform hover:scale-105 transition duration-300 hover:drop-shadow-lg dark:drop-shadow-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Planning;
