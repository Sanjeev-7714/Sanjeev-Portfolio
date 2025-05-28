import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (nav) => {
    setActive(nav.title);
    if (nav.id === "home") {
      // Cross-browser smooth scroll
      try {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (error) {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 xs:py-4 sm:py-5 fixed top-0 z-[100] transition-colors duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 select-none'
          onClick={() => {
            setActive("");
            handleNavClick({ id: "home" });
          }}
        >
          <img 
            src={logo} 
            alt='logo' 
            className='w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 object-contain' 
            width={36}
            height={36}
          />
          <p className='text-white text-[14px] xs:text-[16px] sm:text-[18px] font-bold cursor-pointer flex items-center'>
            Sanjeev &nbsp;
            <span className='sm:block hidden'> | Web Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-6 md:gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] sm:text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => handleNavClick(nav)}
            >
              <a 
                href={nav.id === "home" ? "#" : `#${nav.id}`}
                className="outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            className='w-[28px] h-[28px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-transparent rounded'
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
          >
            <img
              src={toggle ? close : menu}
              alt={toggle ? "close menu" : "open menu"}
              className='w-[22px] h-[22px] xs:w-[24px] xs:h-[24px] object-contain'
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 xs:p-6 black-gradient absolute top-16 xs:top-20 right-0 mx-2 xs:mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-xl backdrop-blur-sm`}
            aria-hidden={!toggle}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-3 xs:gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] w-full ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleNavClick(nav);
                  }}
                >
                  <a 
                    href={nav.id === "home" ? "#" : `#${nav.id}`}
                    className="block w-full px-2 py-1 rounded hover:bg-[#915EFF]/10 transition-colors duration-200 outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
