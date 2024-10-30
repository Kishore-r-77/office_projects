import Banner from "../../../assets/undraw_real_time_sync_re_nky7.svg";

function FuturaInstech() {
  return (
    <section className="container mx-auto flex h-[700px] flex-col items-center justify-center py-10 bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200 dark:bg-gradient-to-br dark:from-violet-900 dark:via-purple-700 dark:to-violet-700 rounded-lg shadow-xl md:h-[600px] md:flex-row md:py-0 px-6 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-12 text-gray-800 dark:text-white md:grid-cols-2">
        {/* Left Section: Text Content */}
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-once="true"
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
            FuturaInsTech
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-100 md:text-xl">
            FuturaInsTech is an Information Technology (IT) company instituted
            by a team of highly professional IT individuals. We cater to IT
            solutions for insurance-based products from Pre-Sales Support to
            Settlement of Claims, with extensive expertise in System
            Integration, Business Process Re-Engineering, and more.
          </p>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
            Our mission is to ensure seamless core business functioning with
            cost-effective IT solutions, backed by intimate knowledge of global
            Insurance products and regulatory processes.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="rounded-lg border-2 border-primary bg-primary px-5 py-3 text-md font-semibold text-white transition duration-300 hover:bg-primary/80 dark:bg-primary dark:hover:bg-primary/70">
              Learn More
            </button>
            <button className="rounded-lg border-2 border-gray-900 bg-white px-5 py-3 text-md font-semibold text-gray-900 transition duration-300 hover:bg-gray-100 hover:text-primary dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-primary">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-once="true"
          className="flex justify-center p-6"
        >
          <img
            src={Banner}
            alt="FuturaInsTech illustration"
            className="max-w-sm w-full transform hover:scale-105 transition duration-300 hover:drop-shadow-lg dark:drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default FuturaInstech;
