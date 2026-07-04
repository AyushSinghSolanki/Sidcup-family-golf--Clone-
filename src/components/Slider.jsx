import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import assets from "../assets";

const Slider = () => {
  const containerRef = useRef(null);

  const images = [
    assets.SIMG1,
    assets.SIMG2,
    assets.SIMG3,
    assets.SIMG4,
    assets.SIMG5,
    assets.SIMG6,
  ];

  useGSAP(
    () => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-black py-20 overflow-hidden relative flex flex-col items-center justify-center"
    >
      {/* Slider Row */}
      <div className="w-full flex -rotate-3 scale-105 origin-center my-8">
        <div className="marquee-track flex gap-10 will-change-transform">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-44 h-44 md:w-52 md:h-52 shrink-0 rounded-2xl overflow-hidden shadow-xl border border-neutral-800 bg-zinc-900"
            >
              <img
                src={img}
                alt={`Instagram Post ${index + 1}`}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          ))}

          {images.map((img, index) => (
            <div
              key={`dup-${index}`}
              className="w-44 h-44 md:w-52 md:h-52 shrink-0 rounded-2xl overflow-hidden shadow-xl border border-neutral-800 bg-zinc-900"
            >
              <img
                src={img}
                alt={`Duplicate ${index + 1}`}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FIXED: Right Bottom Instagram Div */}
      <div className="mt-4 flex items-center justify-center gap-3 text-white py-4 transform rotate-[-1.5deg] self-center md:self-end mr-0 md:mr-24 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 md:w-8 md:h-8"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>

        <span className="text-2xl md:text-3xl font-[1000] tracking-wider uppercase font-sans select-none">
          FOLLOW US ON INSTAGRAM
        </span>
      </div>
    </section>
  );
};

export default Slider;
