import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const InfiniteMarque = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 38,
      repeat: -1,
    });
  }, []);

  const items = [
    "TOPTRACER RANGE",
    "GOLF LESSONS",
    "ADVENTURE GOLF",
    "CAFÉ",
    "EVENTS",
    "TOPTRACER RANGE",
    "GOLF LESSONS",
    "ADVENTURE GOLF",
    "CAFÉ",
    "EVENTS",
  ];

  return (
    <section className="relative overflow-hidden py-8 md:py-16 z-20">
      <div
        ref={marqueeRef}
        className="flex w-max items-center whitespace-nowrap gap-8 md:gap-16"
      >
        {items.map((item, index) => (
          <h1
            key={index}
            className="marquee-title cursor-pointer text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider"
          >
            {item}
          </h1>
        ))}
      </div>
    </section>
  );
};

export default InfiniteMarque;
