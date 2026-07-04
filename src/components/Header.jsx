import React, { useRef, useEffect } from "react";
import assets from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  { title: "Toptracer Range", link: "/" },
  { title: "Golf Lessons", link: "/" },
  { title: "Adventure Golf", link: "/" },
  { title: "Café", link: "/" },
  { title: "Events", link: "/" },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.to(headerRef.current, {
      backgroundColor: "#000",
      paddingTop: "20px",
      paddingBottom: "20px",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=100",
        scrub: 0.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="header flex items-center justify-between px-4 md:px-10 lg:px-20 flex-wrap md:flex-nowrap"
    >
      {/* LEFT SIDE */}
      <div className="flex items-center uppercase gap-6 md:gap-10 lg:gap-20 flex-wrap md:flex-nowrap">
        {/* LOGO */}
        <div className="w-16 md:w-20 lg:w-23 shrink-0">
          <img src={assets.logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* NAV */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-6 lg:gap-10 text-xs md:text-sm lg:text-base">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-lime-400 transition-colors duration-300"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center gap-3 md:gap-6 lg:gap-12 uppercase mt-3 md:mt-0">
        <div className="header-button text-xs md:text-sm lg:text-base px-3 md:px-5 lg:px-6 py-1.5 md:py-2">
          <a href="/">Book Range</a>
        </div>

        <div className="header-button text-xs md:text-sm lg:text-base px-3 md:px-5 lg:px-6 py-1.5 md:py-2">
          <a href="/">Book Golf</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
