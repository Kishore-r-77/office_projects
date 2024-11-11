import {
  FaLinkedin,
  FaWhatsapp,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className="grid py-5 md:grid-cols-3">
          {/* Company Info */}
          <div className="px-4 py-8">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home">
                Futura
                <span className="inline-block font-bold text-primary">
                  InsTech
                </span>
              </a>
            </h1>
            {/* <p>Sample description can go here.</p> */}
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Chennai, Tamil Nadu</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+91-8825761193</p>
            </div>
          </div>

          {/* Important Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <a href="/#About">About</a>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <a href="/#Product">Services</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex gap-6">
                  {" "}
                  {/* Flexbox for side-by-side icons */}
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/futurainstech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-200 hover:scale-105"
                  >
                    <FaLinkedin className="text-3xl" />
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918825761193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-200 hover:scale-105"
                  >
                    <FaWhatsapp className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            &copy; 2024 Futura InsTech. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
