function FITPreview() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-lg shadow-lg lg:px-16">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
        className="flex flex-col gap-6 text-center text-gray-800 dark:text-white md:text-left"
      >
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
          FuturaInstech Preview
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-100 md:text-xl">
          FuturaInsTech is a Start-Up Insurance FinTech Company established by
          1st Generation Entrepreneurs. FuturaInsTech is a conglomerate of
          insurance-based technocrats nurturing over three decades of expertise
          in Information Technology abetting the Insurance Business.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-100 md:text-xl">
          The team’s IT voyage commenced in the pre-Y2K era, traversing through
          Y2K conversion and support, and core insurance implementation,
          encompassing both “Green Fields” as well as “Migrations”.
        </p>
      </div>
    </section>
  );
}

export default FITPreview;
