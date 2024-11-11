import Banner from "../../../assets/undraw_real_time_sync_re_nky7.svg";

function FuturaInstech() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-16 bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200 dark:bg-gradient-to-br dark:from-violet-900 dark:via-purple-700 dark:to-violet-700 rounded-lg shadow-xl md:h-[600px] md:flex-row md:py-0 px-6 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-8 text-gray-800 dark:text-white md:grid-cols-2 md:gap-12">
        {/* Left Section: Text Content */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-once="true"
          className="flex flex-col items-center gap-8 text-center md:items-start md:text-left"
        >
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
            More About Us
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 md:text-xl">
            FuturaInsTech is an Information Technology (IT) company instituted
            by a team of highly professional IT individuals. FuturaInsTech
            caters to IT solutions for Insurance-based products, from Pre-Sales
            Support to Settlement of Claims, in addition to liaising with
            Regulatory Authorities. The team possesses extensive and intimate
            knowledge of global Insurance products, with profound expertise in
            System Integration, Insurance Transformation, Business Process
            Re-Engineering, Implementation, Data Migration, and effective
            maintenance of any Insurance application—whether built on Legacy
            Technology or contemporary systems. With our IT solutions, we ensure
            the continuous functioning of core business while optimizing
            investment.
          </p>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
            Our mission is to provide seamless core business functionality with
            cost-effective IT solutions, backed by our intimate knowledge of
            global Insurance products and regulatory processes.
          </p>
        </div>

        {/* Right Section: Image */}
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="true"
          className="flex justify-center p-6"
        >
          <img
            src={Banner}
            alt="FuturaInsTech illustration"
            className="max-w-full w-full h-auto max-h-[400px] object-contain transform hover:scale-105 transition-all duration-300 hover:drop-shadow-lg dark:drop-shadow-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default FuturaInstech;
