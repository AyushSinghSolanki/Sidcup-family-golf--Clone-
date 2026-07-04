import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../assets";

gsap.registerPlugin(ScrollTrigger);

const WAitfor = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const cardsData = [
    { id: 1, title: "TOPTRACER RANGE", img: assets.photo1 },
    { id: 2, title: "GOLF LESSONS", img: assets.photo2 },
    { id: 3, title: "ADVENTURE GOLF", img: assets.photo3 },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        textRef.current,
        {
          y: 120, // 🔥 start below (50% feel equivalent in px)
        },
        {
          y: -40, // 🔥 goes ABOVE cards slightly
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", // when section enters viewport
            end: "center center", // mid scroll point
            scrub: 1.5,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* BACK TEXT */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full max-w-6xl pointer-events-none z-0 overflow-hidden">
        <h1
          ref={textRef}
          className="text-[6vw] md:text-[8vw] font-black uppercase whitespace-nowrap text-center"
          style={{
            WebkitTextStroke: "2px white",
            color: "black",
          }}
        >
          WHAT ARE YOU WAITING FOR?
        </h1>
      </div>

      {/* CARDS */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-20">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="relative h-44 md:h-52 rounded-3xl flex items-center justify-center cursor-pointer overflow-hidden bg-[#a3e635] group"
          >
            <img
              src={card.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
            />

            <h2 className="relative z-10 text-xl md:text-2xl font-black uppercase text-black group-hover:text-white transition-all duration-300">
              {card.title}
            </h2>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WAitfor;
