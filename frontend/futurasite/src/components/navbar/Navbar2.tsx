import { useState, useEffect } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] border-b-[1px] border-primary/50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg"
      >
        <nav className="container flex items-center justify-between py-2">
          {/* Logo Section */}
          <div className="text-2xl text-white md:text-3xl">
            <a href="/#home">
              Futura
              <span className="inline-block font-bold text-primary">
                InsTech
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <ul className="flex items-center space-x-8">
              <li className="group cursor-pointer">
                <a
                  href="/#About"
                  className="flex items-center text-lg hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>

              {/* Dropdown Menu for Other Sections */}
              <li className="group cursor-pointer relative">
                <a
                  href="#"
                  className="flex items-center text-lg hover:text-primary transition-colors"
                >
                  More
                  <span className="ml-2 text-sm">▼</span>
                </a>
                <ul className="absolute left-0 hidden bg-white text-black shadow-lg group-hover:block">
                  <li>
                    <a
                      href="/#Enterprise"
                      className="block px-4 py-2 text-lg hover:bg-primary hover:text-white"
                    >
                      FuturaInsTech's Enterprise
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#Manifesto"
                      className="block px-4 py-2 text-lg hover:bg-primary hover:text-white"
                    >
                      FuturaInsTech's Manifesto
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#FuturaKernel"
                      className="block px-4 py-2 text-lg hover:bg-primary hover:text-white"
                    >
                      FuturaInsTech's Kernel
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#Team"
                      className="block px-4 py-2 text-lg hover:bg-primary hover:text-white"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#TechStack"
                      className="block px-4 py-2 text-lg hover:bg-primary hover:text-white"
                    >
                      Our Technical Stack
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#OperationalModels"
                      className="block px-4 py-2 text-lg hover:bg-primary hover:text-white"
                    >
                      Operational Models
                    </a>
                  </li>
                </ul>
              </li>

              <li className="group cursor-pointer">
                <a
                  href="/#Location"
                  className="flex items-center text-lg hover:text-primary transition-colors"
                >
                  Location
                </a>
              </li>
            </ul>

            {/* Phone Number Section */}
            <div className="flex items-center space-x-4">
              <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90 transition-colors" />
              <div className="text-sm">
                <p>Call us on</p>
                <p className="text-lg">
                  <a href="tel:+918825761193">+91 8825761193</a>
                </p>
              </div>
            </div>

            {/* Light/Dark Mode Switcher */}
            <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? (
                <BiSolidSun className="text-2xl cursor-pointer hover:text-primary transition-colors" />
              ) : (
                <BiSolidMoon className="text-2xl cursor-pointer hover:text-primary transition-colors" />
              )}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex items-center">
            {/* Burger Icon */}
            <div onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <HiMenuAlt3 className="cursor-pointer text-3xl" />
              ) : (
                <HiMenuAlt1 className="cursor-pointer text-3xl" />
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-violet-900 text-white">
          <ul className="space-y-6 py-6">
            <li>
              <a
                href="/#About"
                className="block text-lg px-6 py-2 hover:bg-primary transition-colors"
              >
                About Us
              </a>
            </li>

            {/* Dropdown Menu for Other Sections */}
            <li>
              <a
                href="#"
                className="block text-lg px-6 py-2 hover:bg-primary transition-colors"
              >
                More
              </a>
              <ul className="pl-4">
                <li>
                  <a
                    href="/#FuturaEnterprise"
                    className="block text-lg px-6 py-2 hover:bg-primary transition-colors"
                  >
                    FuturaInsTech's Enterprise
                  </a>
                </li>
                <li>
                  <a
                    href="/#FuturaManifesto"
                    className="block text-lg px-6 py-2 hover:bg-primary transition-colors"
                  >
                    FuturaInsTech's Manifesto
                  </a>
                </li>
                <li>
                  <a
                    href="/#FuturaKernel"
                    className="block text-lg px-6 py-2 hover:bg-primary transition-colors"
                  >
                    FuturaInsTech's Kernel
                  </a>
                </li>
                <li>
                  <a
                    href="/#Team"
                    className="block text-lg px-6 py-2 hover:bg-primary transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/#TechStack"
                    className="block text-lg px-6 py-2 hover:bg-primary transition-colors"
                  >
                    Our Technical Stack
                  </a>
                </li>
                <li>
                  <a
                    href="/#OperationalModels"
                    className="block text-lg px-6 py-2 hover:bg-primary transition-colors"
                  >
                    Operational Models
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="/#Location"
                className="block text-lg px-6 py-2 hover:bg-primary transition-colors"
              >
                Location
              </a>
            </li>

            {/* Phone Number Section */}
            <li>
              <div className="flex items-center justify-center gap-4 px-6 py-2">
                <BiPhoneCall className="h-[30px] w-[30px] rounded-md bg-primary p-2 text-2xl text-white" />
                <div className="text-sm text-center">
                  <p>Call us on</p>
                  <p className="text-lg">
                    <a href="tel:+918825761193">+91 8825761193</a>
                  </p>
                </div>
              </div>
            </li>

            {/* Theme Switcher */}
            <li className="flex justify-center">
              <div
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <BiSolidSun className="text-2xl cursor-pointer hover:text-primary transition-colors" />
                ) : (
                  <BiSolidMoon className="text-2xl cursor-pointer hover:text-primary transition-colors" />
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar2;
