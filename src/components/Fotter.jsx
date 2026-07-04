import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="relative w-full bg-linear-to-r from-[#9db00d] via-[#5dd62e] to-[#a3e635] text-black pt-20 pb-6 px-6 md:px-16 overflow-hidden font-sans select-none">
      {/* DOTS */}
      <div className="absolute top-10 left-6 opacity-30 grid grid-cols-4 gap-3 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* COLUMN 1 - LOGO + SOCIAL */}
        <div className="flex flex-col space-y-6">
          {/* LOGO (SVG) */}
          <img src={logo} alt="logo" className="w-40 md:w-48 object-contain" />

          {/* SOCIAL */}
          <div className="flex items-center gap-4 text-black">
            {/* Facebook */}
            <a
              href="#"
              className="hover:text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="hover:text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col space-y-4">
          {["TOPTRACER RANGE", "CRAZY GOLF", "CAFÉ"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xl md:text-2xl font-black uppercase hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col space-y-4">
          {["EVENTS", "GOLF LESSONS", "CONTACT US"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xl md:text-2xl font-black uppercase hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* COLUMN 4 */}
        <div className="flex flex-col space-y-2 text-sm md:text-base font-bold uppercase text-black/90">
          <p>A20, SIDCUP BYPASS</p>
          <p>CHISLEHURST</p>
          <p>KENT</p>
          <p>BR7 6RP</p>
          <p className="pt-2">TEL: 0208 309 0181</p>

          <a
            href="#"
            className="pt-4 underline hover:text-white transition w-fit"
          >
            GET DIRECTIONS
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-black/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] md:text-xs font-bold uppercase text-black/80">
        <div className="flex flex-wrap justify-center md:justify-start gap-2 text-center md:text-left">
          <span>© {new Date().getFullYear()} Adventure Leisure Ltd.</span>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Terms
          </a>
        </div>

        <a href="#" className="hover:text-white">
          Web Design London
        </a>
      </div>
    </footer>
  );
};

export default Footer;
