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
        scrub: .5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="header flex items-center justify-between"
    >
      <div className="flex items-center uppercase gap-20">
        <div className="w-23">
          <img src={assets.logo} alt="Logo" />
        </div>

        <nav>
          <ul className="flex items-center gap-10">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-12 uppercase">
        <div className="header-button">
          <a href="/">Book Range</a>
        </div>

        <div className="header-button">
          <a href="/">Book Golf</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
